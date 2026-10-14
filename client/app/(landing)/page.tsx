import Hero from "@/components/landingpage/Hero";
import Built from "@/components/landingpage/Built";
import Prompt from "@/components/landingpage/Prompt";
import Interactive from "@/components/landingpage/Interactive"
import Subscription from "@/components/landingpage/Subscriptions";
import Terms from "@/components/landingpage/Terms"
import FAQ from "@/components/landingpage/FAQ"
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Prompt/>
        <Built />
        <Interactive/>
        <Subscription/>
        <Terms/>
        <FAQ/>
      </div>
    </>
  );
}
