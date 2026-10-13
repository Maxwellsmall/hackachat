"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Book, Bookmark, Clock, House, ChevronDown, Plus, SettingsIcon, Copy, Pen, Recycle } from "lucide-react";
import { Time01FreeIcons } from "@hugeicons/core-free-icons";

const Interactive = () => {
  return (
    <section className="px-7 py-1 flex w-full ">
      <div className="w-full ">
        <div className="max-w-6xl sm:px-6 text-left">
          <div className="inline-flex items-center px-3 rounded-md bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span>INTERACTIVE COMPONENT DASHBOARD</span>
          </div>
          <h1 className="font-bold text-[40px]">
           Try it right here in your browser.
          </h1>
          
        <div className="flex  sm:flex-row items-center justify-between">
            <p className="text-zinc-500 mt-1 text-[16px]">
            This isn't an image or mockup. It's the actual shadcn-based
             chat interface hooked into <br /> the API. Test a question below:
          </p>
          <Button>
            <span>Open in full screen</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

        </div>
        </div>
         <div className="flex flex-col h-fit  w-full rounded-md border border-zinc-300 my-10">
              <div className="flex px-7 py-2 w-full items-center justify-between bg-white border-b border-xinc-500">
                <div className="flex items-center gap-1">
                    <div className="py-3 px-3 rounded-md cursor-pointer hover:bg-zinc-100">
                       <Book className="text-zinc-500 w-4 h-4 "/>

                    </div>
                        <div className="py-3 px-3 rounded-md cursor-pointer hover:bg-zinc-100">
                           <House className="text-zinc-500 w-4 h-4 cursor-pointer"/>

                        </div>
                  <span className="text-black text-sm font-semibold">Interactive Live Sandbox</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex gap-1 py-1 items-center rounded-md border border-zinc-200 gap-1 px-1">
                        <Clock className="w-4 h-4 text-zinc-400"/>
                        <span>llama 3.370b instruct</span>
                        <ChevronDown className="w-4 h-4 text-zinc-400"/>
                    </div>
                    <Plus className="text-zinc-400 w-4 h-4"/>
                    <SettingsIcon className="text-zinc-400 w-4 h-4"/>
                    <Button className="text-black bg-white border border-zinc-200" variant={"secondary"}>
            <div className="w-5 h-5 rounded-lg bg-zinc-900 flex items-center justify-center text-white shadow-xs group-hover: bg-zinc-800 transition-colors">
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
            
                <div className="flex flex-col items-center justify-center w-full overflow-y-scroll">
                    <div className="flex flex-col px-22 bg-zinc-100/90 py-5 items-start justify-center w-full">
                    <div className="flex w-full py-2 items-center justify-between">
                        <div className="py-1 px-2 bg-zinc-200/60 rounded-md">
                            <p className="text-zinc-500 text-[10px]">You</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button className="bg-white text-gray-500 hover:bg-gray-200">
                                <Copy className=""/>
                                <span>Copy</span>
                            </Button>
                            <Button className="bg-white text-gray-500 hover:bg-gray-200">
                                <Pen className=""/>
                                <span>Edit</span>
                            </Button>
                        </div>
                    </div>
                    <p>Can you show me a simple Python snippet to read a sensor or file safely, and explain what could go wrong?</p>
                </div>
                 <div className="py-20 px-22 w-full border border-zinc-300">
                    <div className="flex w-full py-2 items-center justify-between">
                        <div className="bg-black rounded-md py-[1px] px-2">
                         <span className="text-white text-xs font-semibold">HACKACHAT</span>
                            
                        </div>
                        <div className="flex items-center gap-2">
                            <Button className="bg-white text-gray-500 hover:bg-gray-200">
                                <Copy className=""/>
                                <span>Copy</span>
                            </Button>
                            <Button className="bg-white text-gray-500 hover:bg-gray-200">
                                <Recycle className=""/>
                                <span>retry</span>
                            </Button>
                        </div>
                    </div>
                    <p>Here is the clean, idiomatic way to read a file using a <span className="py-[1px] rounded-md px-2 bg-zinc-200">with</span> context manager:</p>

                    <div className="flex flex-col h-fit  w-full rounded-md border border-zinc-300">
                          <div className="flex px-4 py-2 w-full items-center justify-between bg-zinc-100/90">
                            <div className="flex items-center gap-1">
                              <span className="bg-zinc-300 w-2 h-2 rounded-full" />
                              <span className="text-zinc-500 text-sm">example.py</span>
                            </div>
                            <span className="text-zinc-500 text-xs">PROMPT & REPLY</span>
                          </div>
                          <div className="w-full px-5 flex flex-col items-center justify-center py-5 space-y-5">
                            <div className="w-full bg-zinc-50/90 border-3 border-zinc-100 py-4 px-5 rounded-[10px]">
                              <p className="text-zinc-500 font-bold text-sm">YOU ASKED:</p>
                              <span className="mt-2 ">
                                &quot;why is my python binary search looping forever on low
                                high&quot;
                              </span>
                            </div>
                            <div className="w-full border-2 border-zinc-100 py-4 px-5 rounded-[8px]">
                              <p className="text-zinc-500 font-bold text-sm">
                                HACKACHAT EXPLAINED:
                              </p>
                              <span>
                                &quot;Look at how you recalculate mid. if you write high = mid
                                instead of high = mid - 1, the search window never shrinks when two
                                element remain:&quot;
                              </span>
                              <div className="w-full bg-zinc-50/90 border-3 border-zinc-100 py-1 px-5 rounded-[10px] my-5">
                                <span className="flex items-center text-zinc-500">
                                  [2, 5]
                                  <ArrowRight className="w-4 h-4 text-zinc-500" />
                                  low=0, high=1, mid=0
                                </span>
                                <span className="text-zinc-500">
                                  if target less than 5, high becomes 0
                                </span>{" "}
                                <br />
                                <span>
                                  Next loop: mid=(0+0)//2 = 0{" "}
                                  <ArrowRight className="w-4 h-4 text-zinc-500" /> stuck!
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
                </div>

               

            </div>
       
      </div>
    </section>
  );
};

export default Interactive;
