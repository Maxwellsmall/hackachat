import { create } from "zustand";
import { db, StoredChat, StoredMessage } from "@/lib/db";

interface ChatStore {
  chats: StoredChat[];
  messages: StoredMessage[];
  listChats(): Promise<StoredChat[]>;
  createChat(): Promise<void>;
  renameChat(id: string, title: string): Promise<void>;
  deleteChat(id: string): Promise<void>;
  getMessages(chatId: string): Promise<StoredMessage[]>;
  addMessage(
    chatId: string,
    message: Pick<StoredMessage, "role" | "content">,
  ): Promise<void>;
  searchChats(query: string): StoredChat[];
  clearAll(): Promise<void>;
}

export const useChatStore = create<ChatStore>()((set, get) => ({
  chats: [],
  messages: [],
  listChats: async () => {
    const chats = await db.chats.orderBy("updatedAt").reverse().toArray();
    set({ chats });
    return chats;
  },
  createChat: async () => {
    const chat = {
      id: crypto.randomUUID(),
      title: "New chat",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    await db.chats.add(chat);
    set((state) => ({ chats: [...state.chats, chat] }));
  },
  renameChat: async (id, title) => {
    await db.chats.update(id, { title });
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === id ? { ...chat, title } : chat,
      ),
    }));
  },
  deleteChat: async (id) => {
    await db.transaction("rw", db.chats, db.messages, async () => {
      await db.messages.where("chatId").equals(id).delete();
      await db.chats.delete(id);
    });
    set((state) => ({
      chats: state.chats.filter((c) => c.id !== id),
      messages: state.messages.filter((m) => m.chatId !== id),
    }));
  },
  getMessages: async (chatId) => {
    const messages = await db.messages
      .where("[chatId+createdAt]")
      .between([chatId, 0], [chatId, Infinity])
      .toArray();
    set({ messages });
    return messages;
  },
  addMessage: async (chatId, messgae) => {
    const saved = {
      ...messgae,
      id: crypto.randomUUID(),
      chatId,
      createdAt: Date.now(),
    };
    await db.transaction("rw", db.chats, db.messages, async () => {
      await db.messages.add(saved);
      await db.chats.update(chatId, { updatedAt: Date.now() });
    });

    set((state) => ({ messages: [...state.messages, saved] }));
    await get().listChats();
  },
  searchChats(query) {
    const q = query.toLowerCase();
    return get().chats.filter((chat) => chat.title.toLowerCase() === q);
  },
  clearAll: async () => {
    db.transaction("rw", db.chats, db.messages, async () => {
      await db.chats.clear();
      await db.messages.clear();
    });
    set({ messages: [], chats: [] });
  },
}));
