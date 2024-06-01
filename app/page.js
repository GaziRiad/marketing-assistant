import { Hero, Inspiration, Marketing } from "@/components/LandingPage";

function Home() {
  return (
    <div className="container pb-56">
      <Hero />
      <Marketing />
      <Inspiration />
    </div>
  );
}

export default Home;
