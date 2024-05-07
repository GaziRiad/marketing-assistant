import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        height={500}
        width={500}
        alt="Marketing assistant website's logo"
        className="absolute bottom-0 left-0 w-12 translate-y-1/3 md:left-[10%]"
      />
    </Link>
  );
}

export default Logo;
