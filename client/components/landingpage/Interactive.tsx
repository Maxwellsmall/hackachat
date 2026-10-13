"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Book,
  Clock,
  House,
  ChevronDown,
  Plus,
  SettingsIcon,
  Copy,
  Pen,
  Recycle,
  ArrowUp,
  Key,
} from "lucide-react";

const Interactive = () => {
  return (
    <section className="px-50 py-20 flex w-full">
      <div className="w-full">
        <div className="max-w-6xl sm:px-6 text-left">
          <div className="inline-flex items-center px-3 rounded-md bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span>INTERACTIVE COMPONENT DASHBOARD</span>
          </div>
          <h1 className="font-bold text-[40px]">
            Try it right here in your browser.
          </h1>

          <div className="flex sm:flex-row items-center justify-between">
            <p className="text-zinc-500 mt-1 text-[16px]">
              This isn&apos;t an image or mockup. It&apos;s the actual
              shadcn-based chat interface hooked into <br /> the API. Test a
              question below:
            </p>
            <Button>
              <span>Open in full screen</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col  w-full rounded-md border border-zinc-300 my-10 overflow-hidden bg-white">
          <div className="flex px-7 py-3 w-full items-center justify-between bg-white border-b border-zinc-300 shrink-0 z-10">
            <div className="flex items-center gap-1">
              <div className="py-2 px-3 rounded-md cursor-pointer hover:bg-zinc-100">
                <Book className="text-zinc-500 w-4 h-4" />
              </div>
              <div className="py-2 px-3 rounded-md cursor-pointer hover:bg-zinc-100">
                <House className="text-zinc-500 w-4 h-4 cursor-pointer" />
              </div>
              <span className="text-black text-sm font-semibold">
                Interactive Live Sandbox
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1 py-1 items-center rounded-md border border-zinc-200 px-2 text-xs">
                <Clock className="w-4 h-4 text-zinc-400" />
                <span>llama 3.3 70b instruct</span>
                <ChevronDown className="w-4 h-4 text-zinc-400" />
              </div>
              <Plus className="text-zinc-400 w-4 h-4 cursor-pointer" />
              <SettingsIcon className="text-zinc-400 w-4 h-4 cursor-pointer" />
              <Button
                className="text-black bg-white border border-zinc-200 h-8"
                variant={"secondary"}
              >
                <div className="w-5 h-5 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs">
                  <svg
                    className="w-1 h-1 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="4" />
                    <path d="m8 12 3 3 5-5" />
                  </svg>
                </div>
                <span>Sign in</span>
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start w-full bg-zinc-50/50">
            <div className="flex flex-col px-22 bg-zinc-100/90 py-4 items-start justify-center w-full border-b border-zinc-200">
              <div className="flex w-full py-2 items-center justify-between">
                <div className="py-1 px-2 bg-zinc-200/60 rounded-md">
                  <p className="text-zinc-500 text-[10px]">You</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button className="bg-white text-gray-500 hover:bg-gray-200 h-7 text-xs">
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </Button>
                  <Button className="bg-white text-gray-500 hover:bg-gray-200 h-7 text-xs">
                    <Pen className="w-3 h-3" />
                    <span>Edit</span>
                  </Button>
                </div>
              </div>
              <p className="text-sm">
                Can you show me a simple Python snippet to read a sensor or file
                safely, and explain what could go wrong?
              </p>
            </div>

            <div className="py-8 px-22 w-full bg-white">
              <div className="flex w-full py-2 items-center justify-between">
                <div className="bg-black rounded-md py-[1px] px-2">
                  <span className="text-white text-xs font-semibold">
                    HACKACHAT
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button className="bg-white text-gray-500 hover:bg-gray-200 h-7 text-xs">
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </Button>
                  <Button className="bg-white text-gray-500 hover:bg-gray-200 h-7 text-xs">
                    <Recycle className="w-3 h-3" />
                    <span>Retry</span>
                  </Button>
                </div>
              </div>
              <p className="text-sm">
                Here is the clean, idiomatic way to read a file using a{" "}
                <span className="py-[1px] rounded-md px-2 bg-zinc-200 text-xs">
                  with
                </span>{" "}
                context manager:
              </p>

              <div className="flex flex-col h-fit w-full rounded-md border border-zinc-300 mt-7">
                <div className="flex px-4 py-2 w-full items-center justify-between bg-zinc-100/90">
                  <div className="flex items-center gap-1">
                    <span className="text-zinc-500 text-sm">Python</span>
                  </div>
                  <Button className="bg-zinc-100/90 text-gray-500 hover:bg-gray-200 h-7 text-xs">
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </Button>
                </div>
                <div className="w-full px-5 flex flex-col items-center justify-center py-5 space-y-5 text-black rounded-b-md">
                  <pre className="text-xs w-full overflow-x-auto">
                    <code>{`# safe_read.py
                        def read_sensor_data(filepath: str) -> str:
                            try:
                                with open(filepath, mode="r", encoding="utf-8") as f:
                                    return f.read().strip()
                            except FileNotFoundError:
                                print(f"[!pathname] Warning: file does not exist yet.")
                                return ""
                            except PermissionError:
                                print(f"[!pathname] Error: No read permission.")
                                return ""`}</code>
                  </pre>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center my-4">
                <p className="text-black font-semibold text-sm">
                  What could go wrong without{" "}
                  <span className="py-[1px] rounded-md px-2 bg-zinc-200 text-xs">
                    with
                  </span>{" "}
                  ?
                </p>
                <p className="text-black font-light my-2 text-sm">
                  1.{" "}
                  <span className="text-black font-semibold">
                    Dangling file handles:
                  </span>{" "}
                  If an exception occurs before{" "}
                  <span className="py-[1px] rounded-md px-2 bg-zinc-200 text-xs">
                    f.close()
                  </span>
                  , the OS keeps the file locked in memory.
                </p>
                <p className="text-black font-light my-2 text-sm">
                  2.{" "}
                  <span className="text-black font-semibold">
                    Encoding mismatches:
                  </span>{" "}
                  On Windows, default encoding is often Windows-1252, which
                  crashes on emojis or special symbols unless you explicitly
                  pass{" "}
                  <span className="py-[1px] rounded-md px-2 bg-zinc-200 text-xs">
                    encoding=&quot;utf-8&quot;
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center py-10 bg-white border-t border-zinc-200 shrink-0 px-6">
            <div className="border border-zinc-200 py-4 w-full max-w-4xl rounded-md focus-within:border-black focus-within:ring-2 focus-within:ring-black transition-all bg-white shadow-sm">
              <input
                type="text"
                placeholder="Message Hackachat...(Enter to send, Shift + Enter for newline)"
                className="outline-0 w-full px-4 text-sm bg-transparent pb-3 border-b border-zinc-200"
              />
              <div className="flex w-full items-center mt-3 px-4 justify-between ">
                <Button className="bg-transparwnt hover:bg-transparent">
                  <span className="text-zinc-400">Enter</span>
                  <Key className="text-zinc-400" />
                </Button>
                <Button className="py-4 px-2 bg-zinc-400">
                  <ArrowUp className="text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive;
