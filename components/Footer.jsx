import Image from "next/image";
import FooterCards from "./FooterCards";

function Footer() {
  return (
    <footer className="relative bg-secondary px-5 py-12 xl:px-40 3xl:px-80">
      <FooterCards />
      <Image
        width={500}
        height={500}
        src="/blob.svg"
        alt="svg"
        className="absolute -top-[10%] left-[0] -z-20 hidden w-44 xl:block"
      />
    </footer>
  );
}

export default Footer;
