import About from "@/components/About";
import Design from "@/components/Design";
import Features from "@/components/Features";
import Landing from "@/components/Landing";
import Pricing from "@/components/Pricing";
import Statistics from "@/components/Statistics";
import Team from "@/components/Team";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="">
      <Landing />
      <Features />
      <About />
      <Work />
      <Design />
      <Statistics />
      <Team />
      <Pricing />
    </main>
  );
}