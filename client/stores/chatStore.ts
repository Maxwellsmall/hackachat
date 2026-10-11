import { createStore } from "zustand";
import { ChatResponseDto } from "@/lib/api";

interface ChatStore {
  chats: ChatResponseDto[];
}

export const useChatStore = createStore<ChatStore>()((set) => ({
  chats: [],
}));
