import { StoredMessage } from "@/lib/db";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import Image from "next/image";

export default function MessageCard({ message }: { message: StoredMessage }) {
  return (
    <div className="border-y py-10 px-20 space-y-5">
      <div className="flex items-center justify-between">
        <Badge variant={message.role === "user" ? "secondary" : "default"}>
          {message.role === "user" ? "User" : "Assistant"}
        </Badge>
        <Button variant={"ghost"}>
          <Copy /> Copy
        </Button>
      </div>
      {message.content.map((part, idx) =>
        part.type === "text" ? (
          <p key={idx}>{part.text}</p>
        ) : (
          <Image key={idx} src={part.data} alt="Chat images" />
        ),
      )}
    </div>
  );
}
