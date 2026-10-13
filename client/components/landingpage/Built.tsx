import React from "react";
import Card from "@/components/landing/card";

const CardProps = [
  {
    id: 1,
    title: "Pinpoints bugs without hand-waving",
    subtitle: `Paste Terminal logs, cryptic compliers, or CSS flexbox disaster.
              Hackachat steps through the execution stacks points out exact lines
              where state went out of sync, and gives syntax-highlighted solutions.
    `,
    headText: "REAL CODE UNDERSTANDING",
    footerText: "Tuned for:",
    footerSpanText:
      "Python, TypeScript, React, C++, Rust, Arduino, Git, and Linux terminal commands.",
    size: "large",
    variant: "colored",
  },
  {
    id: 2,
    title: "Hint before answers",
    subtitle: `When you're stuck on calculus, AP chemistry, or essay structure, 
              Hackachat asks guiding questions and explains the intuition 
              behind the formula so it actually clicks.
               `,
    headText: "PEDAGOGY FIRST",
    footerText: `"Never just paste answers into homework—understand the machinery.",`,
    size: "normal",
    variant: "bordered",
  },
  {
    id: 3,
    title: "Brainstorm realistic weekends builds",
    subtitle: `
            Want to build a Discord bot, a solderable macro pad, or a game in Godot?
             Hackachat breaks big ideas down into 3-hour milestones
              so you can actually ship by Sunday night.
    `,
    headText: "MAKER SPIRIT",
    size: "normal",
    variant: "none",
  },
  {
    id: 4,
    title: "Open weights, zero lock-in",
    subtitle: `
          Switch between Meta's Llama 3.3 70B, Mistral Nemo, and Qwen Coder in one 
          click. Dial in temperature, adjust response lengths, or export all 
          conversations as raw JSON whenever you want.
    `,
    headText: "FULL USER CONTROL",
    footerText: "come here now",
    size: "large",
    variant: "none",
  },
];

const Built = () => {
  return (
    <div className="w-full px-50 py-20  border border-zinc-200 my-10">
      <div className="py-7">
        <h1 className="font-semibold text-[35px]">
          A peer at the next desk, not a corporate <br />
          bot.
        </h1>
        <p className="text-zinc-500 text-[15px]">
          Most chatbots either blurt out homeworks answer(so you fail the test
          later) or talk down <br />
          to you. Hackachat is tuned for learning by building.
        </p>

        <div className="grid grid-cols-7 my-10 items-center justify-center gap-5 w-full">
          {CardProps.map((card) => {
            let footerStyles = "py-1";

            if (card.variant === "colored") {
              footerStyles =
                "bg-zinc-100/20 border border-zinc-200 text-black py-5 px-3 rounded-md";
            } else if (card.variant === "bordered") {
              footerStyles =
                "border-t flex items-center border-zinc-200 py-5 px-3 rounded-md";
            }

            return (
              <Card
                key={card.id}
                title={card.title}
                subtitle={card.subtitle}
                headText={card.headText}
                footerText={card.footerText}
                footerSpanText={card.footerSpanText}
                className={card.size === "large" ? "col-span-4" : "col-span-3"}
                classname={footerStyles}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Built;
