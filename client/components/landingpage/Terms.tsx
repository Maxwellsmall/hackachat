"use client";

import React from "react";
import { CircleGauge, Cpu, Info, ShieldCheck } from "lucide-react";
import TermsCard from "../landingpage/TermsCard";

const Terms = () => {
  const termscardData = [
    {
      headText: "What lives on your device",
      subtitle: `All your chat logs, custom instructions, and settings are 
               saved locally in your browser storage. If you clear your 
               browser data or switch devices, chats won’t follow you unless
               you export them.`,
      icon: <Cpu className="w-4 h-4" />,
    },
    {
      headText: "What goes through the API",
      subtitle: `When you send a message, it is forwarded through our backend server to Hack Club
              AI (ai.hackclub.com). To keep the free tier safe from automated spam and abuse, 
              requests are logged upstream for abuse prevention.`,
      icon: <ShieldCheck className="w-4 h-4" />,
    },

    {
      headText: "Fair rate limits",
      subtitle: `Because this service is run for free by a non-profit student community, 
              we limit usage to 20 messages per minute and 250 messages per day per 
              client. This keeps it fair for everyone.`,
      icon: <CircleGauge className="w-4 h-4" />,
    },
    {
      headText: "Models can be wrong",
      subtitle: `Language models hallucinate and make subtle logic errors. Always double-check
              critical formulas, syntax, or facts before submitting homework or shipping 
              code.`,
      icon: <Info className="w-4 h-4" />,
    },
  ];
  return (
    <section
      id="Privacy"
      className="md:px-50 px-10 py-20  flex flex-col w-full"
    >
      <div className="w-full ">
        <div className="max-w-6xl sm:px-6 text-left">
          <div className="inline-flex items-center space-x-2 px-3 rounded-md bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-6 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <span> NO SNEAKY TERMS</span>
          </div>
          <h1 className="font-bold text-[40px]">
            An honest look at privacy & limits
          </h1>
          <p className="text-zinc-500 mt-5 text-[20px]">
            Most Privacy policies hide behind twenty pages of jargon. Here is
            how Hackachat actually works with your data, plain and simple.
          </p>
        </div>
        <div className="w-full px-5 grid grid-cols-2 py-3 gap-4 my-7">
          {termscardData.map((card, index) => (
            <TermsCard
              key={index}
              subtitle={card.subtitle}
              icon={card.icon}
              headText={card.headText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Terms;
