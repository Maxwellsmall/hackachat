"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, MessageSquare, Settings } from "lucide-react";
import { useDialogContext } from "@/context/DialogProvider";

export default function Sidebar() {
  const [search, setSearch] = useState("");
  const { setOpenSettingsDialog } = useDialogContext();
  return (
    <aside className="flex flex-col h-full w-75 shrink-0 bg-card border-r border-border select-none">
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
        <div className="">
          <div className="mx-3 p-2 flex bg-muted/40  border rounded-md mt-2 gap-3 h-full">
            <MessageSquare className="text-zinc-400 shrink-0" />
            <div className="w-full">
              <p className="text-bold text-xs -mb-2.5">New Chat</p>
              <span className="text-[10px] text-zinc-700">Just Now</span>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 p-3 border-t border-border flex flex-col justify-center items-center">
        <Button
          variant={"ghost"}
          className="bg-muted/40 border border-border flex justify-start items-center text-black"
        >
          <span className="bg-black text-white p-1 px-2 font-bold text-xs rounded-md mr-3">
            H
          </span>
          <span className="text-xs font-normal tracking-tight">
            Sign in with Hack Club
          </span>
        </Button>

        <Button
          variant={"ghost"}
          className="shrink-0 flex justify-start items-center mx-4 mt-1 w-50"
          onClick={() => setOpenSettingsDialog(true)}
        >
          <Settings size="20" className="text-zinc-600" />
          <p className="text-xs text-zinc-500 ml-2">Settings</p>
        </Button>
      </div>
    </aside>
  );
}
