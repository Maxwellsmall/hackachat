import { StoredChat } from "@/lib/db";
import { useChatStore } from "@/stores/chatStore";
import { Check, Edit, MessageSquare, Trash, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { formatRelativeDate } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export default function ChatCard({ chat }: { chat: StoredChat }) {
  const { renameChat, deleteChat } = useChatStore();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(chat.title);
  const pathname = usePathname();
  const router = useRouter();

  const handleEdit = async () => {
    await renameChat(chat.id, title);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (pathname.includes(chat.id)) router.push("/chat");
    deleteChat(chat.id);
  };
  return (
    <div
      onClick={() => router.push(`/chat/c/${chat.id}`)}
      className={`group flex items-center justify-between p-2 mx-3 ${pathname.includes(chat.id) && "bg-secondary border"} rounded-md mt-2`}
    >
      {isEditing ? (
        <Input
          placeholder="New chat"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <div className="flex gap-3 h-full">
          <MessageSquare className="text-zinc-400 shrink-0" />
          <div className="w-full">
            <p className="font-semibold text-xs -mb-2.5">{chat.title}</p>
            <span className="text-[10px] text-zinc-700">
              {formatRelativeDate(chat.updatedAt)}
            </span>
          </div>
        </div>
      )}
      {isEditing ? (
        <div className="flex">
          <Button
            variant={"ghost"}
            onClick={(e) => {
              e.stopPropagation();
              handleEdit();
            }}
          >
            <Check />
          </Button>
          <Button
            variant={"destructive"}
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(false);
              setTitle(chat.title);
            }}
          >
            <X />
          </Button>
        </div>
      ) : (
        <div className="flex transition-all group-hover:opacity-100 opacity-0">
          <Button
            variant={"ghost"}
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
          >
            <Edit />
          </Button>
          <Button
            variant={"destructive"}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
          >
            <Trash />
          </Button>
        </div>
      )}
    </div>
  );
}
