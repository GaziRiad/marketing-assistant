import Image from "next/image";
import Link from "next/link";
import { ImLinkedin } from "react-icons/im";

function TeamSection() {
  return (
    <section className="container relative mx-auto mb-24 px-5 lg:mb-40">
      <Image
        width={200}
        height={200}
        src="/about-wave.svg"
        alt="svg"
        className="absolute left-0 top-1/2 -z-20 w-full -translate-y-1/2 lg:scale-[35%]"
      />
      <div className="flex flex-col items-center justify-center">
        <h2 className=" mb-4 text-center">
          <p className="mb-1 text-xl font-bold text-[#393E41]">Created by</p>
          <p className=" text-4xl font-bold text-primary">
            Small Business Owner
          </p>
          <p className="mb-1 text-xl font-bold text-[#393E41]">for</p>
          <p className=" text-4xl font-bold text-primary underline underline-offset-4">
            Small Business Owner
          </p>
        </h2>
        <Image
          src="/images/owner.webP"
          height={320}
          width={320}
          alt="picture of Jeanette Kramer"
          className=" mb-2"
        />
        <div className="mb-8 flex items-center justify-center gap-2 text-center">
          <div>
            <p className="font-bold">Jeanette Kramer</p>
            <p>CEO & Founder</p>
          </div>
          <Link href="https://www.linkedin.com/feed/" target="_blank">
            <ImLinkedin color="#5ACBF0" size={26} />
          </Link>
        </div>
        <p className="text-center text-xl leading-relaxed">
          “As a small business owner myself, I’ve walked the path of challenges
          and triumphs, understanding firsthand the hurdles we face in making
          our dreams a reality. The vision behind My Marketing Assistant stems
          from a desire not just to overcome these obstacles, but to turn them
          into stepping stones for others like me. We’re not just creating
          content; we’re crafting a community where every small business owner
          has the tools to shine in the digital world. Here’s to making our
          marks together, one impactful story at a time.”
        </p>
      </div>
    </section>
  );
}

export default TeamSection;
