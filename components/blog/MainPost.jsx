// import { format } from "date-fns";
// import SanityBlockContent from "@sanity/block-content-to-react";

import Image from "next/image";

function MainPost({ post }) {
  // function printText(body) {
  //   let fullBodyText = "";
  //   body
  //     .filter((el) => el._type !== "image")
  //     .map((el) => (fullBodyText = fullBodyText + `${el.children[0].text}@@`));
  //   fullBodyText = fullBodyText.split(" ").slice(0, 180).join(" ").split("@@");
  //   return fullBodyText;
  // }
  return (
    <section className="container mx-auto mb-40 mt-20 flex items-center justify-between gap-24 px-72">
      <div className="w-1/3">
        <Image
          height={800}
          width={800}
          src="/images/messi.jpg"
          alt="image of lionel messi"
          className="h-[600px] rounded-xl object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="mb-2 text-3xl font-bold capitalize">
          How Barcelona dominate the world of football
        </p>
        <p className="mb-4 text-stone-600">
          <em>By Riad Hallouch - 31/01/2009</em>
        </p>
        <div className="text-black-800">
          In the modern workspace, ergonomic integrity plays a pivotal role in
          ensuring employee health, productivity, and overall job satisfaction.
          A poorly designed workstation can result in physical discomfort,
          leading to ailments like repetitive strain. Understanding the
          Significance of Ergonomics Ergonomics focuses on designing workspaces
          that align with the capabilities and limitations of the human body. An
          ergonomic workspace reduces the risk of injuries and boosts employee
          efficiency. Traditional ergonomic assessments involved manual
          inspections and relied heavily on the subjective experiences of
          employees. However, with the rise of remote work and diverse
          workstation setups, a more advanced and objective method was needed.
          This need paved the way for AI-driven ergonomic evaluations. How Do
          AI-driven Ergonomic Evaluations Work?
        </div>
        <div className=" ml-auto mt-4">
          <button
            // to={`/blog/${post.slug.current}`}
            className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-4 py-2 text-white transition-all"
          >
            Read more
          </button>
        </div>
      </div>
    </section>
  );
}

export default MainPost;
