import { Hero, Cards, Marketing, Benefits, Testimonial, EfficiencyShowcase, Pricing } from "@/components/LandingPage";

function Home() {
  return (
    <div>
      <Hero />
      <Marketing />
      <Cards />
      <div className="py-10 bg-[#FCDE67]">
        <Benefits />
        <Testimonial />
        <EfficiencyShowcase />
        <Pricing />
      </div>
    </div>
  );
}

export default Home;
