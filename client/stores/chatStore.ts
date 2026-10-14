import { create } from "zustand";
import { ChatResponseDto } from "@/lib/api";

interface ChatStore {
  chats: ChatResponseDto[];
}

export const useChatStore = create<ChatStore>()((set) => ({
  chats: [],
}));
