import Link from "next/link";
import Logo from "./Logo";

function Header() {
  return (
    <header className=" mx-auto mb-24 flex max-w-2xl items-center justify-center rounded-bl-full rounded-br-full bg-[#5ACBF0] py-3 lg:mb-40">
      {/* <Logo /> */}
      <ul className="flex items-center justify-center gap-6 font-semibold text-zinc-800">
        <li className="transition-all hover:text-primary">
          <Link href="#">About Us</Link>
        </li>
        <li className="transition-all hover:text-primary">
          <Link href="#">Weekly Bundle</Link>
        </li>
        <li className="transition-all hover:text-primary">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
