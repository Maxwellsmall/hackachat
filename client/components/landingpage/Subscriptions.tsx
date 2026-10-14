"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import SubCard from "../landing/subCard";

const Subscriptions = () => {
  const cardData = [
    {
      title: "Hack Club AI Proxy",
      subtitle: `Hack Club provides free upstream API compute (ai.hackclub.com) 
                  to high school coders. They run an OpenAI-compatible Proxy with 
                  leading models.`,
      icon: <ArrowDown className="w-4 h-4" />,
    },
    {
      title: "Built by teenagers",
      subtitle: `Two of our contributors are beginners learning frontend development.
                  The code is structured cleanly with small components, 
                  typed schemas, and zero convoluted boilerplate so students can read and modify.`,
      icon: <ArrowDown className="w-4 h-4" />,
    },
    {
      title: "Open source and reproducible",
      subtitle: `Everything you see is open source. You can run the fast API backend,
                 spin up the web app, connect your own proxy key, or host it for your
                  own high school club.`,
      icon: <ArrowDown className="w-4 h-4" />,
    },
  ];

  return (
    <section className="md:px-24 px-6 py-20 border-y border-zinc-200 dark:border-zinc-800 flex flex-col w-full bg-white dark:bg-zinc-950">
      <div className="w-full max-w-7xl mx-auto">
        <div className="max-w-3xl text-left">
          <div className="inline-flex items-center space-x-2 px-3 rounded-md bg-zinc-100 dark:bg-zinc-900 py-2 border border-zinc-200 dark:border-zinc-800 text-xs font-medium mb-6 text-zinc-800 dark:text-zinc-200">
            <span>NO SUBSCRIPTION OR VC MONEY</span>
          </div>
          <h1 className="font-bold text-[40px] text-zinc-900 dark:text-zinc-50 tracking-tight">
            Why is this free? Who runs it?
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-5 text-[20px] leading-relaxed">
            Hackachat was started by a team of teenagers inside Hack Club’s
            Third Space. We wanted an AI tool we could use for school, coding
            clubs, and weekend game jams without hitting paywalls.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          {cardData.map((card, index) => (
            <SubCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;