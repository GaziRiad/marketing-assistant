import Image from "next/image";

function HeroAbout() {
  return (
    <section className="container mx-auto mb-24 lg:mb-44">
      <div className=" flex flex-col items-center justify-center">
        <Image
          src="/images/logotag.png"
          height={500}
          width={500}
          alt="Marketing assistant logo"
          className="mb-6 w-44"
        />
        <p className="mb-3 text-4xl font-extrabold text-[#393E41] ">
          The weekly <span className="text-primary">e-mail</span>
        </p>
        <p className="-mb-6 text-4xl font-extrabold text-[#393E41] ">
          feels like a <span className="text-primary">marketing team</span>
        </p>

        <h1 className="-mb-10 text-[15rem] font-extrabold text-primary">
          ABOUT
        </h1>
        <p className="text-2xl font-bold">
          “Making marketing easier than ever in the smoothest way possible.”
        </p>
      </div>
      <Image src="/images/ABOUT.png" height={500} width={500} alt="about png" />
    </section>
  );
}

export default HeroAbout;
