import Image from "next/image";
import Link from "next/link";

import { IoIosAddCircle } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function FooterCards() {
  return (
    <>
      <div className="bg-background container mx-auto hidden w-full grid-cols-4 grid-rows-4 gap-8 rounded-3xl p-6 xl:grid">
        <div className="group row-span-1 rounded-2xl py-4">
          <Image
            src="/images/logotag.png"
            height={300}
            width={300}
            alt="Marketing assistant logo"
          />
        </div>
        <Link
          href="#"
          className="footer-card-shadow group relative col-start-1 row-span-3 flex flex-col items-start justify-end gap-2 rounded-2xl bg-primary px-6 py-12 pr-12 transition-all"
        >
          <p className="text-3xl tracking-tighter text-white">
            <span>About</span>
            <br />
            <strong>US</strong>
          </p>
          <IoArrowForwardCircleOutline
            size={64}
            color="#fff"
            className="-ml-2 transition-all group-hover:rotate-45"
          />
        </Link>
        <Link
          href="#"
          className="footer-card-shadow group relative col-start-2 row-span-2 row-start-1 flex items-end justify-start rounded-2xl bg-[#5ACBF0] px-6 py-12 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-3xl text-white">Design Templates</p>
        </Link>
        <Link
          href="#"
          className="footer-card-shadow group relative col-start-2 row-span-2 row-start-3 flex items-end justify-start rounded-2xl bg-[#E2E2E2] px-6 py-12 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#5ACBF0"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-foreground text-3xl">Copy Templates</p>
        </Link>
        <Link
          href="#"
          className="footer-card-shadow group relative col-start-3 row-span-2 row-start-1 flex items-end justify-start rounded-2xl bg-[#E2E2E2] px-6 py-12 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#FCDE67"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-foreground text-3xl">Guides & Tutorials</p>
        </Link>
        <div
          href="#"
          className="bg-secondary relative col-start-3 row-span-2 row-start-3 flex items-end justify-start rounded-2xl px-6 py-12 pr-12 transition-all"
        >
          <Image
            height={500}
            width={500}
            src="/images/cute.png"
            alt="cute bear png"
            className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 scale-75"
          />
        </div>
        <Link
          href="#"
          className="footer-card-shadow group relative col-start-4 row-span-2  row-start-1 flex items-end justify-start rounded-2xl bg-[#5ACBF0] px-6 py-12 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className="absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-3xl text-white">Blog & News</p>
        </Link>
        <Link
          href="#"
          className="bg-secondary bg-footer footer-card-shadow group relative col-start-4 row-span-2 row-start-3 flex w-full items-end justify-start rounded-2xl bg-cover px-6 py-12 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-3xl font-extrabold text-white">ENTERPRISE</p>
        </Link>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="bg-background container mx-auto flex w-full flex-wrap gap-2 rounded-3xl p-3 xl:hidden">
        <div className="group w-full rounded-2xl py-4">
          <Image
            src="/images/logotag.png"
            height={300}
            width={300}
            alt="Marketing assistant logo"
            className="mx-auto w-2/3"
          />
        </div>
        <Link
          href="#"
          className="footer-card-shadow group relative flex w-full flex-col items-start justify-end gap-2 rounded-2xl bg-primary px-6 py-6 pr-12 transition-all"
        >
          <p className="text-xl tracking-tighter text-white">
            <span>About</span>
            <br />
            <strong>US</strong>
          </p>
          <IoArrowForwardCircleOutline
            size={48}
            color="#fff"
            className="-ml-2 transition-all group-hover:rotate-45"
          />
        </Link>
        <Link
          href="#"
          className="footer-card-shadow group relative flex w-full items-end justify-start rounded-2xl bg-[#5ACBF0] px-6 py-6 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-xl text-white">Design Templates</p>
        </Link>
        <Link
          href="#"
          className="footer-card-shadow group relative flex w-full items-end justify-start rounded-2xl bg-[#E2E2E2] px-6 py-6 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#5ACBF0"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-foreground text-xl">Copy Templates</p>
        </Link>
        <Link
          href="#"
          className="footer-card-shadow group relative flex w-full items-end justify-start rounded-2xl bg-[#E2E2E2] px-6 py-6 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#FCDE67"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-foreground text-xl">Guides & Tutorials</p>
        </Link>
        <Link
          href="#"
          className="footer-card-shadow group relative flex w-full items-end justify-start rounded-2xl bg-[#5ACBF0] px-6 py-6 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className="absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-xl text-white">Blog & News</p>
        </Link>
        <Link
          href="#"
          className="bg-secondary bg-footer footer-card-shadow group relative flex w-full items-end justify-start rounded-2xl bg-cover px-6 py-6 pr-12 transition-all"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className=" absolute right-4 top-4 transition-all group-hover:rotate-45"
          />
          <p className=" text-xl font-extrabold text-white">ENTERPRISE</p>
        </Link>
      </div>
    </>
  );
}

export default FooterCards;
