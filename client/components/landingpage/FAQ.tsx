"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Why is Hackachat completely free?",
      answer: `HackClub is a 501(c)(3) worldwide non profit for 
      high school makers and coders, Through the HackClub AI Proxy,
       students gets free compute so money is never a barrier to building things.`,
    },
    {
      id: "item-2",
      question: "Do I need credit card or an account?",
      answer: `Nope! You can start chatting immediately. You are given an anonymous
       local session cookie strictly used to prevent spam bots. `,
    },
    {
      id: "item-3",
      question: "Can i export my conversations?",
      answer: `Yes. Head to settings > Data to export all your chats ass
       standard jSON file anytime, or wipe them with one click.`,
    },
    {
      id: "item-4",
      question: "Can i choose which model to use?",
      answer: `Yes. Use the modal dropdown at the top of the chat to switch between
       available models returned live from  Hack Club AI, including Llama 3.3 70B and Mistral.`,
    },
  ];

  return (
    <section className="md:px-50 border-y px-10 py-20  flex flex-col w-full">
      <div className="w-full flex flex-col items-center max-w-7xl">
        <div className="text-left mb-8 w-full">
          <div className="inline-flex items-center space-x-2 px-3 rounded-md bg-white py-2 border border-zinc-200/80 text-xs font-medium mb-4 shadow-sm">
            <span>CLEAR ANSWERS</span>
          </div>
          <h1 className="font-bold text-[35px] md:text-[40px] tracking-tight">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>

        <div className="w-full max-w-7xl flex items-center justify-center py-3 gap-4">
          <Accordion className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-zinc-200 rounded-lg px-6 bg-white shadow-sm data-[state=open]:border-zinc-300 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 pb-4 text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
