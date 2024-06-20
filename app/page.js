import {
  Hero,
  Cards,
  Marketing,
  Benefits,
  Testimonial,
  EfficiencyShowcase,
  Pricing,
} from "@/components/LandingPage";

export const metadata = {
  title: "Marketing assistant | HOME",
};

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
