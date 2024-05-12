import Link from "next/link";

function SubscribeSection() {
  return (
    <section className="mb-24 text-5xl lg:mb-40">
      <Link
        href="#"
        target="_blank"
        className="flex flex-col items-center justify-center gap-8 rounded-full bg-[#5ACBF0] py-80 font-bold text-background"
      >
        <span>Subscribe to</span>
        <span>Weekly Marketing Bundle</span>
      </Link>
    </section>
  );
}

export default SubscribeSection;
