import { create } from "zustand";
import {db} from "@/lib/db"
import { ChatResponseDto } from "@/lib/api";

interface ChatStore {
  chats: ChatResponseDto[];
}

export const useChatStore = create<ChatStore>()((set) => ({
  chats: [],
}));
