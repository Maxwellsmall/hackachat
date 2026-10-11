"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Plus,
  Search,
  MessageSquare,
  Trash2,
  Edit2,
  Check,
  X,
  Settings,
} from "lucide-react";

export default function () {
  const [search, setSearch] = useState("");
  return (
    <aside className="flex h-full w-full  bg-card border-r border-border select-none">
        <div className="border-r h-screen overflow-y-hidden">
      <div className="p-3 border-b border-border space-y-2">
        <div className="flex item-center justify-between">
          <div className="flex items-center gap-2.5 bg-">
            <div className="flex h-7 items-center justify-center rounded-md bg-primary text-primary-foreground font-mono font-bold text-xs border border-primary p-3">
              H
            </div>
            <div className="leading-tight">
              <span className="font-display font-semibold text-sm tracking-tight text-ackground block ">
                Hackachat
              </span>
              <span className="text-[10px] text-muted-foreground block">
                Third Space
              </span>
            </div>
          </div>
        </div>
        <Button className="w-60 text-left"> + New Chat</Button>
      </div>
      <div className="px-3 pt-2 pb-1">
        <div className="relative">
          <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="h-7 pl-8 pr-2 text-xs bg-muted/40 border-border"
          />
        </div>
        </div>
        <div className="mx-5 p-2 flex justify-center items-center bg-zinc-300 rounded-md mt-7 gap-3">
            <MessageSquare />
            <div className="w-full ">
                <p className="text-bold text-xs">New Chat</p>
                <span className="text-[10px] -mt-1.25">Just Now</span>
            </div>
        </div>
      </div>
    </aside>
  );
}
