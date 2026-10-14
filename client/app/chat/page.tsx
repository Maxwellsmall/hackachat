"use client";
import { Input } from "@/components/ui/input";
import { SendHorizontal, Code2Icon, BookOpenIcon} from "lucide-react";
import { title } from "process";

export default function Page() {
    const topicSuggestions = [
        {
            topic : "CODE & TECH",
            icon: Code2Icon,
            title: "Debug an error in my Code",
            details: "I have a bug in my code. Here is what I am trying to do. and what happened instead and the error..."
        },
        {
            topic: "LEARNING",
            icon: BookOpenIcon,
            title: "Break down a tricky concept"
        }
    ]
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex justify-center items-center">
          <div className="p-10">
            <p className="p-1 border w-[140px] text-[10px] text-center">
              HACK CLUB THIRD SPACE
            </p>
            <h1 className="my-2 text-2xl">Watin you dey think tho?</h1>
            <p className="text-xs text-zinc-500">
              Ask a qestion, Debug code or pick a starter prompt below.
              Hackachat guide you step-by-step so you learn by doing.
            </p>
          </div>
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
              <SendHorizontal size={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
