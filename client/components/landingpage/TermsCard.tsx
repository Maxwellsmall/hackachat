import React from "react";

interface SubCardProps {
  headText: string;
  subtitle: string;
  icon: React.ReactNode;
}

const TermsCard: React.FC<SubCardProps> = ({ subtitle, icon, headText }) => {
  return (
    <div className={`rounded-md bg-white border py-2 px-5 border-zinc-200`}>
      <div className="flex flex-col my-2 items-start">
        <div className="flex items-center justify-center gap-2 my-2">
          <button className="text-zinc-400">{icon}</button>
          <p className="font-semibold">{headText}</p>
        </div>
        <p className="text-zinc-600 text-[16px]">{subtitle}</p>
      </div>
    </div>
  );
};

export default TermsCard;
