"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";
import Prompt from "./Prompt";

const Hero = () => {
  return (
    <section className="pt-6 pb-20 flex">
      <div className="w-full">
        <div className="max-w-6xl sm:px-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span>HACK CLUB THIRD SPACE PROJECT</span>
          </div>
          <h1 className="font-bold text-[40px]">
            An AI assistance that treats you like a builder.
          </h1>
          <p className="text-zinc-500 mt-5 text-[20px]">
            Free, Zero subscriptions, and designed by high school hackers, Built
            to help <br />
            you debug messy code , break down though school concepts without
            spoon feeding- <br />
            feeding you answers and launch weekend projects
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-start gap-3.5 mt-8 px-5">
          <Button className="py-2">
            <span>Start chatting now</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button className="bg-white py-2 text-black border border-zinc-300 hover:bg-transparent">
            <span>Try the live demo below</span>
          </Button>
        </div>
        <div className="flex items-center justify-start mt-5 px-5 gap-2">
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
      <Prompt />
    </section>
  );
};

export default Hero;
