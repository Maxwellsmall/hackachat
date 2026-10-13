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
    <aside className="flex flex-col h-full w-[300px] shrink-0 bg-card border-r border-border select-none">
        <div className="p-3 border-b border-border space-y-2 shrink-0">
        <div className="flex item-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="rounded-md bg-primary text-primary-foreground font-mono font-bold text-xs border border-primary p-2 px-3">
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
        <Button className="w-full text-left"> + New Chat</Button>
      </div>
      <div className="px-3 pt-3 pb-1 shrink-0">
        <div className="relative">
          <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search conversations..."
            className="h-8 pl-8 pr-2  text-xs bg-muted/40 border-border "
          />
        </div>
        </div>
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="mx-3 p-2 flex bg-muted/40  border rounded-md mt-2 gap-3 h-full">
              <MessageSquare className="text-zinc-400 shrink-0"/>
              <div className="w-full">
                  <p className="text-bold text-xs -mb-2.5">New Chat</p>
                  <span className="text-[10px] text-zinc-700">Just Now</span>
              </div>
</div>
          </div>
        <div className="shrink-0 p-3 border-t border-border">
              <Button className="bg-muted/40 border hover:bg-zinc-500 flex justify-center items-center text-black">
              <span className="bg-black text-white p-2 px-3 font-bold text-xs rounded-md">H</span>
              Sign in with Hack Club
              </Button> 
      </div>
    </aside>
  );
}
