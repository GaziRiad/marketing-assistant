import {
  Hero,
  Cards,
  Marketing,
  Benefits,
  Testimonial,
  EfficiencyShowcase,
  Pricing,
} from "@/components/LandingPage";

function Home() {
  return (
    <div>
      <Hero />
      <Marketing />
      <Cards />
      <div className="mt-10 bg-[#FCDE67] py-10">
        <Benefits />
        <Testimonial />
        <EfficiencyShowcase />
        <Pricing />
      </div>
    </div>
  );
}

export default Home;
