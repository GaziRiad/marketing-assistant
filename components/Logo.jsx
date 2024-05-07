import Image from "next/image";

function Logo() {
  return (
    <Image
      src="/images/messi.jpg"
      height={500}
      width={500}
      alt="Marketing assistant website's logo"
    />
  );
}

export default Logo;
