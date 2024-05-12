import Image from "next/image";

function HeroAbout() {
  return (
    <section className="container relative mx-auto pb-60">
      <div className=" flex flex-col items-center justify-center">
        <Image
          src="/images/logotag.png"
          height={500}
          width={500}
          alt="Marketing assistant logo"
          className="mb-6 w-44"
        />
        <p className="mb-3 text-center text-3xl font-extrabold text-[#393E41] lg:text-4xl ">
          The weekly <span className="text-primary">e-mail</span>
        </p>
        <p className="mb-16 text-center text-3xl font-extrabold text-[#393E41] lg:-mb-6 lg:text-4xl ">
          feels like a <span className="text-primary">marketing team</span>
        </p>
        <h1 className="text-8xl font-extrabold text-primary lg:text-[15rem]">
          ABOUT
        </h1>
        <p className="mb-14 text-center text-lg font-bold lg:mb-32 lg:text-2xl">
          “Making marketing easier than ever in the smoothest way possible.”
        </p>
      </div>
      <Image
        src="/images/ABOUT.png"
        height={500}
        width={500}
        alt="about png"
        className="lg-translate-x-1/4 absolute bottom-0 left-1/2 -translate-x-1/2 scale-75 lg:mb-8 lg:scale-100"
      />
    </section>
  );
}

export default HeroAbout;
