"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-7 py-5 flex flex-col w-full">
      <div className="w-full ">
        <div className="max-w-6xl sm:px-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 rounded-md dark:bg-black border dark:border-zinc-500 bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span>HACK CLUB THIRD SPACE PROJECT</span>
          </div>
          <h1 className="font-bold text-[40px]">
            Try it right here in the browser.
          </h1>
          <p className="text-zinc-500 mt-5 text-[20px]">
          This isn't an image or mockup. It's the actual 
          shadcn-based chat interface hooked into the API.
           Test a question below:
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start gap-3.5 mt-8 px-5">
          <Button>
            <span>Start chatting now</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button variant={"secondary"}>
            <span>Try the live demo below</span>
          </Button>
        </div>
        <div className="flex items-center justify-start mb-7 mt-2 px-5 gap-2">
          <div className="flex items-center justify-center gap-2">
            <ArrowDown className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-400 text-[15px]">No credit card</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ArrowDown className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-400 text-[15px]">No account needed</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ArrowDown className="w-4 h-4 text-zinc-400" />
            <span className="text-zinc-400 text-[15px]">Stored on device</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
