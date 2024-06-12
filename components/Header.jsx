import Link from "next/link";
import Logo from "./Logo";

function Header() {
  return (
    <header className=" fixed left-1/2 top-0 z-50 mx-auto flex w-full max-w-2xl -translate-x-1/2 items-center justify-center rounded-bl-full rounded-br-full bg-[#5ACBF0] py-3 shadow-md">
      <Logo />
      <ul className="flex items-center justify-center gap-6 font-spartan font-semibold text-[#393E41]">
        <li className="transition-all hover:text-primary">
          <Link href="/about">About Us</Link>
        </li>
        <li className="transition-all hover:text-primary">
          <Link href="/">Weekly Bundle</Link>
        </li>
        <li className="transition-all hover:text-primary">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
