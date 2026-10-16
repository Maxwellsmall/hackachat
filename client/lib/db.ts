import Dexie, { type EntityTable } from "dexie";
import { MessageDto } from "@/lib/api";

export interface StoredChat {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
}

export interface StoredMessage extends MessageDto {
  id: string;
  chatId: string;
  createdAt: number;
}

class HackachatDB extends Dexie {
  chats!: EntityTable<StoredChat, "id">;
  messages!: EntityTable<StoredMessage, "id">;

  constructor() {
    super("hackachat");
    this.version(1).stores({
      chats: "id, updatedAt",
      messages: "id, [chatId+createdAt]",
    });
  }
}

export const db = new HackachatDB();
