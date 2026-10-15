"use client";
import { Input } from "@/components/ui/input";
import {
  SendHorizontal,
  Code2Icon,
  BookOpenIcon,
  RocketIcon,
  Lightbulb,
  Cpu,
} from "lucide-react";

export default function Page() {
  const topicSuggestions = [
    {
      topic: "CODE & TECH",
      icon: <Code2Icon size={"15px"} />,
      title: "Debug an error in my Code",
      details:
        "I have a bug in my code. Here is what I am trying to do. and what happened instead and the error...",
    },
    {
      topic: "LEARNING",
      icon: <BookOpenIcon size={"15px"} />,
      title: "Break down a tricky concept",
      details:
        "Can you explain how public-key cryptography works using an intuitive physical analogy without...",
    },
    {
      topic: "BUILDING",
      icon: <RocketIcon size={"15px"} />,
      title: "Plan a weekend hardware/web project",
      details:
        "I want to build a small weekend project with an ESP32 or a web scraper. Can you give me 3...",
    },
    {
      topic: "WRITTING",
      icon: <Lightbulb size={"15px"} />,
      title: "Review my essay arguement & tone",
      details:
        "Can you critique the reasoning and thesis statement of this essay draft? Tell me which claim...",
    },
    {
      topic: "Curiosity",
      icon: <Cpu size={"15px"} />,
      title: "Teach me how to make something under th hood",
      details:
        "How does an operating system kernel actually switch between running processess on CPU?",
    },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-0 overflow-y-auto">
        <div className="flex justify-center items-center">
          <div className="p-10 px-30">
            <p className="p-1 border w-[140px] text-[10px] text-center">
              HACK CLUB THIRD SPACE
            </p>
            <h1 className="my-2 text-2xl">Watin you dey think tho?</h1>
            <p className="text-xs text-zinc-500">
              Ask a qestion, Debug code or pick a starter prompt below.
              Hackachat guide you step-by-step so you learn by doing.
            </p>
            <div className="grid col-span-2 grid-cols-2 shrink-0 gap-3 mt-3">
              {topicSuggestions.map((topics, idx) => (
                <div
                  key={idx}
                  className="border p-5 bg-muted/40 text-black gap-y-px text-left rounded-md cursor-pointer hover:bg-zinc-100 hover:border-black"
                >
                  <div className="flex text-start justify-start items-center m-2">
                    <span className="text-zinc-500">{topics.icon}</span>
                    <p className="text-[10px] ml-2 text-zinc-500">
                      {topics.topic}
                    </p>
                  </div>
                  <p className="text-[15px] ">{topics.title}</p>
                  <p className="text-[13px] text-zinc-500">{topics.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 flex p-3 border-t border-border flex-col justify-center items-center px-20">
        <div className="border-zinc-400 border w-full rounded-md">
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
