import { Hero, Cards, Marketing, Benefits, Testimonial, EfficiencyShowcase } from "@/components/LandingPage";

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
      </div>
    </div>
  );
}

export default Home;
