import Hero from "@/components/landingpage/Hero";
import Built from "@/components/landingpage/Built";
<<<<<<< HEAD
import Interactive from "@/components/landingpage/Interactive";
=======
import Interactive from "@/components/landingpage/Interactive"
>>>>>>> 32e2228 (refactor: Remove unused Prompt component and adjust layout styles for consistency)
import Subscription from "@/components/landingpage/Subscriptions";
import Terms from "@/components/landingpage/Terms";
import FAQ from "@/components/landingpage/FAQ";
export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Built />
        <Interactive />
        <Subscription />
        <Terms />
        <FAQ />
      </div>
    </>
  );
}
