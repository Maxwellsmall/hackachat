import Image from "next/image";
import Hero from "@/components/landingpage/Hero"
import Prompt from "@/components/landingpage/Prompt"
import Built from "@/components/landingpage/Built"

export default function Home() {
  return (
    <>
    <div>

      <Hero/>
      <Prompt/>
      <Built/>
    </div>
    </>
  );
}