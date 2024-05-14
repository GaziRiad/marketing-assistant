import Link from "next/link";

function SubscribeSection() {
  return (
    <section className="mb-24 text-3xl lg:mb-40 lg:text-5xl">
      <Link
        href="#"
        target="_blank"
        className="flex flex-col items-center justify-center rounded-full bg-[#5ACBF0] px-4 py-12 text-center font-bold leading-relaxed text-background lg:gap-8 lg:py-80 lg:leading-tight"
      >
        <span>Subscribe to</span>
        <span>Weekly Marketing Bundle</span>
      </Link>
    </section>
  );
}

export default SubscribeSection;
