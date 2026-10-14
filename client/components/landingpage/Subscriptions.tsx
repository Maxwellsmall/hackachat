"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import SubCard from "../landing/subCard";


const Subscriptions = () => {

const cardData = [
  {
    title: "Hack Club AI Proxy",
    subtitle: `Hackclub provides free upstream API compute (ai.hackclub.com) 
                to high school coders. They run an OPenAi-compatible Proxy wth 
                leading models`,
    icon: <ArrowDown className="w-4 h-4"/>
  },
   {
    title: "Built by teenagers",
    subtitle: `Two of our contributors are begginers learning frontend development.
                The code is structured cleanly with small components. 
                typed schemas and zero convoluted boilerplate and so students can read and modify`,
    icon: <ArrowDown className="w-4 h-4"/>
  },
   {
    title: "Open source and reproducible",
    subtitle: `Everything you see is open source. You can run the fast API backend.
               spin up the web app. connect your own proxy key, or host it for your
                own high school club`,
    icon: <ArrowDown className="w-4 h-4"/>
  },
]

  return (
    <section id="whyfree" className="px-7 py-5 flex flex-col w-full">
      <div className="w-full ">
        <div className="max-w-6xl sm:px-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 rounded-md bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span> NO SUBSCRIPTION OR VC MONEY</span>
          </div>
          <h1 className="font-bold text-[40px]">
            Why is this free? Who runs it?
          </h1>
          <p className="text-zinc-500 mt-5 text-[20px]">
          Hackachat was started by a team of teenagers inside Hack Club’s Third Space.
           We wanted an AI tool we could use for school, coding clubs, and weekend game
            jams without hitting paywalls.
          </p>
        </div>
          <div className="w-full px-5 grid grid-cols-3 gap-4 my-7">
            {
            cardData.map((card, index) => (
              <SubCard 
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                icon={card.icon}
              />
            ))
          }
          </div>
      </div>
    </section>
  );
};

export default Subscriptions;
