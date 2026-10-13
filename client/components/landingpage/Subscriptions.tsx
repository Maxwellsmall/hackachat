"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

const Subscriptions = () => {
  return (
    <section className="md:px-50 px-10 py-20 border-y flex flex-col w-full">
      <div className="w-full">
        <div className="max-w-6xl sm:px-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 rounded-md bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span> NO SUBSCRIPTION OR VC MONEY</span>
          </div>
          <h1 className="font-bold text-[40px]">
            Why is this free? Who runs it?
          </h1>
          <p className="text-zinc-500 mt-5 text-[20px]">
            Hackachat was started by a team of teenagers inside Hack Club’s
            Third Space. We wanted an AI tool we could use for school, coding
            clubs, and weekend game jams without hitting paywalls.
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

export default Subscriptions;
