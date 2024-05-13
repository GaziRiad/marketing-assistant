import Footer from "@/components/Footer";
import SubscribeSection from "@/components/SubscribeSection";
import AboutBanner from "@/components/aboutUS/AboutBanner";
import AboutMission from "@/components/aboutUS/AboutMission";
import HeroAbout from "@/components/aboutUS/HeroAbout";
import TeamSection from "@/components/aboutUS/TeamSection";

export const metadata = {
  title: "About US",
};

function About() {
  return (
    <>
      <HeroAbout />
      <AboutBanner />
      <AboutMission />
      <TeamSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default About;
