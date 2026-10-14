import { ArrowRight } from "lucide-react";
import React from "react";

const Prompt = () => {
  return (
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
  );
};

export default Prompt;
