import { Hero, Cards, Marketing, Benefits, Testimonial } from "@/components/LandingPage";

function Home() {
  return (
    <div>
      <Hero />
      <Marketing />
      <Cards />
      <div className="py-10 bg-[#FCDE67]">
        <Benefits />
        <Testimonial />
      </div>
    </div>
  );
}

export default Home;
