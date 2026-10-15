import { ArrowRight } from "lucide-react";
import React from "react";

const Prompt = () => {
  return (
    <div className="flex flex-col h-fit w-full rounded-md border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm">
      <div className="flex px-4 py-2 w-full items-center justify-between bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-300/60 dark:border-zinc-800 rounded-t-md">
        <div className="flex items-center gap-1.5">
          <span className="bg-zinc-300 dark:bg-zinc-700 w-2 h-2 rounded-full" />
          <span className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">example.py</span>
        </div>
        <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-wider">PROMPT & REPLY</span>
      </div>

      <div className="w-full px-5 flex flex-col items-center justify-center py-5 space-y-5">
        <div className="w-full bg-zinc-50/90 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 py-4 px-5 rounded-[10px]">
          <p className="text-zinc-500 dark:text-zinc-400 font-bold text-sm tracking-wide">YOU ASKED:</p>
          <p className="mt-2 text-zinc-900 dark:text-zinc-100 font-medium">
            &quot;why is my python binary search looping forever on low high&quot;
          </p>
        </div>

        <div className="w-full border border-zinc-200 dark:border-zinc-800 py-4 px-5 rounded-[8px] bg-white dark:bg-zinc-950">
          <p className="text-zinc-500 dark:text-zinc-400 font-bold text-sm tracking-wide mb-2">
            HACKACHAT EXPLAINED:
          </p>
          <p className="text-zinc-800 dark:text-zinc-300 text-sm leading-relaxed">
            &quot;Look at how you recalculate mid. If you write high = mid
            instead of high = mid - 1, the search window never shrinks when two
            elements remain:&quot;
          </p>

          {/* Code snippet / Output Box */}
          <div className="w-full bg-zinc-50/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 py-3 px-5 rounded-[10px] my-4 font-mono text-xs space-y-2">
            <div className="flex items-center text-zinc-600 dark:text-zinc-300 gap-1.5">
              <span>[2, 5]</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span>low=0, high=1, mid=0</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-300">
              if target less than 5, high becomes 0
            </p>
            <div className="flex items-center text-zinc-600 dark:text-zinc-300 gap-1.5 pt-1">
              <span>Next loop: mid=(0+0)//2 = 0</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
              <span className="text-red-500 dark:text-red-400 font-semibold">stuck!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prompt;