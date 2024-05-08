import Image from "next/image";
import FooterCards from "./FooterCards";

function Footer() {
  return (
    <footer className="bg-secondary relative min-h-full px-5 py-12">
      <FooterCards />
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
