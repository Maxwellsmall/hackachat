import Image from "next/image";
import Hero from "@/components/landingpage/Hero"
import Prompt from "@/components/landingpage/Prompt"

export default function Home() {
  return (
    <>
    <div>

      <Hero/>
      <Prompt/>
    </div>
    </>
  );
}