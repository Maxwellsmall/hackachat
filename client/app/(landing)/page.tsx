import Hero from "@/components/landingpage/Hero";
import Built from "@/components/landingpage/Built";
import Prompt from "@/components/landingpage/Prompt";
import Interactive from "@/components/landingpage/Interactive"
import Subscription from "@/components/landingpage/Subscriptions";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Built />
        <Interactive/>
        <Subscription/>
      </div>
    </>
  );
}
