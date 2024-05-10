import Image from "next/image";

function AboutMission() {
  return (
    <section className="container mx-auto mb-24 px-5 lg:mb-40">
      <article className="flex items-center justify-between gap-24">
        <div className="relative w-[25%]">
          <Image
            src="/images/messi.jpg"
            width={600}
            height={600}
            alt="Marketing assistant mission image"
            className="h-[480px] rounded-2xl object-cover"
          />
          <Image
            src="/waveshape.svg"
            height={200}
            width={200}
            alt="wave img"
            className="absolute left-0 top-0 z-10 -translate-x-[10%] -translate-y-1/2 scale-50 xl:left-auto xl:right-0 xl:translate-x-1/2"
          />
          <p className="absolute left-0 top-0 z-20 -translate-y-1/2 translate-x-1/2 text-4xl font-bold text-white xl:-right-20 xl:left-auto xl:translate-x-1/2 dark:text-primary">
            Our <span className=" text-primary"> Mission</span>
          </p>
        </div>
        <div className=" flex flex-1 flex-col gap-4 text-xl leading-8">
          <p>
            Our mission is to champion small business owners by providing them
            with the digital marketing tools and knowledge necessary for success
            in today’s competitive online landscape.
          </p>
          <p>
            We believe in making high-quality, creative marketing resources
            accessible to all, enabling our clients to save time, foster
            consistency, and ignite growth.
          </p>
          <p>
            Our aim is to break down the barriers to effective digital
            marketing, offering a helping hand that guides small businesses
            through the complexities of creating a standout online presence. By
            partnering with us, small business owners gain not just resources,
            but a steadfast ally dedicated to their growth and success.
          </p>
        </div>
      </article>
    </section>
  );
}

export default AboutMission;
