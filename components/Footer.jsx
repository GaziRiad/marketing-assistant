import Image from "next/image";
import Link from "next/link";

import { IoIosAddCircle } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-secondary relative px-72 py-12">
      <div className="bg-background container mx-auto grid w-full grid-cols-4 grid-rows-4 gap-8 rounded-3xl p-6">
        {/*  */}
        <div className="row-span-1 rounded-2xl py-4">
          <Image
            src="/images/logotag.png"
            height={300}
            width={300}
            alt="Marketing assistant logo"
          />
        </div>
        <Link
          href="#"
          className="relative col-start-1 row-span-3 flex flex-col items-start justify-end gap-2 rounded-2xl bg-primary px-6 py-12 pr-12"
        >
          <p className="text-3xl tracking-tighter text-white">
            <span>About</span>
            <br />
            <strong>US</strong>
          </p>
          <IoArrowForwardCircleOutline
            size={64}
            color="#fff"
            className="-ml-2 transition-all hover:rotate-45"
          />
        </Link>
        {/*  */}
        <Link
          href="#"
          className="relative col-start-2 row-span-2 row-start-1 flex items-end justify-start rounded-2xl bg-[#5ACBF0] px-6 py-12 pr-12"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className=" absolute right-4 top-4 transition-all hover:rotate-45"
          />
          <p className=" text-3xl text-white">Design Templates</p>
        </Link>
        <Link
          href="#"
          className="relative col-start-2 row-span-2 row-start-3 flex items-end justify-start rounded-2xl bg-[#E2E2E2] px-6 py-12 pr-12"
        >
          <IoIosAddCircle
            color="#5ACBF0"
            size={36}
            className=" absolute right-4 top-4 transition-all hover:rotate-45"
          />
          <p className=" text-foreground text-3xl">Copy Templates</p>
        </Link>
        {/*  */}
        <Link
          href="#"
          className="relative col-start-3 row-span-2 row-start-1 flex items-end justify-start rounded-2xl bg-[#E2E2E2] px-6 py-12 pr-12"
        >
          <IoIosAddCircle
            color="#FCDE67"
            size={36}
            className=" absolute right-4 top-4 transition-all hover:rotate-45"
          />
          <p className=" text-foreground text-3xl">Guides & Tutorials</p>
        </Link>
        <Link
          href="#"
          className="bg-secondary relative col-start-3 row-span-2 row-start-3 flex items-end justify-start rounded-2xl px-6 py-12 pr-12"
        >
          <Image
            height={500}
            width={500}
            src="/images/cute.png"
            alt="cute bear png"
            className=" absolute bottom-0 left-1/2 z-20 -translate-x-1/2 scale-75"
          />
        </Link>
        {/*  */}
        <Link
          href="#"
          className="bg-secondary relative col-start-3 row-span-2 row-start-3 flex items-end justify-start rounded-2xl px-6 py-12 pr-12"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className=" absolute right-4 top-4 transition-all hover:rotate-45"
          />
        </Link>
        <Link
          href="#"
          className="bg-secondary relative col-start-3 row-span-2 row-start-3 flex items-end justify-start rounded-2xl px-6 py-12 pr-12"
        ></Link>
        {/*  */}
        <Link
          href="#"
          className="relative col-start-4 row-span-2 row-start-1 flex  items-end justify-start rounded-2xl bg-[#5ACBF0] px-6 py-12 pr-12"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className="absolute right-4 top-4 transition-all hover:rotate-45"
          />
          <p className=" text-3xl text-white">Blog & News</p>
        </Link>
        <Link
          href="#"
          className="bg-secondary bg-footer relative col-start-4 row-span-2 row-start-3 flex w-full items-end justify-start rounded-2xl bg-cover px-6 py-12 pr-12"
        >
          <IoIosAddCircle
            color="#fff"
            size={36}
            className=" absolute right-4 top-4 transition-all hover:rotate-45"
          />
          <p className=" text-3xl font-extrabold text-white">ENTERPRISE</p>
        </Link>
      </div>
      <Image
        width={500}
        height={500}
        src="/ooorganize.svg"
        alt="svg"
        className="absolute -top-[10%] left-[0] -z-20 w-44"
      />
    </footer>
  );
}

export default Footer;
