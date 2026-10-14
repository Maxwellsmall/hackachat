"use client";
import { Input } from "@/components/ui/input";
import { SendHorizontal } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="p-0">
          <p>Watin you dey think tho?</p>
        </div>
      </div>
      <div className="shrink-0 flex p-3 border-t border-border flex flex-col justify-center items-center">
        <div className="border-black border-3 w-full">
          <Input
            type="text"
            placeholder="Message Hackachat.. (Enter to Send)"
            className="border-0 m-0 rounded-0 shadow-none rounded-none"
          />
          {/* <textarea
            className="w-full h-5 border-0"
            placeholder="Message Hackachat.. (Enter to Send)"
            draggable="false"
          /> */}
          <div className="flex justify-between items-center p-2 border-t">
            <p className="text-xs">Enter</p>
            <div className="bg-black text-white rounded-sm p-1 px-2">
              <SendHorizontal size={15}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
