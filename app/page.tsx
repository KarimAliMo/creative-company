import About from "@/components/About";
import Blog from "@/components/Blog";
import Comments from "@/components/Comments";
import Design from "@/components/Design";
import Features from "@/components/Features";
import Landing from "@/components/Landing";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
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
      <Portfolio />
      <Comments />
      <Partners />
      <Blog />
    </main>
  );
}
