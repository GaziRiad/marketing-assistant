import Footer from "@/components/Footer";
import SubscribeSection from "@/components/SubscribeSection";
import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      color: "#F45B69",
      text: "CUSTOMIZABLE CONTENT DESIGN",
    },
    {
      color: "#5ACBF0",
      text: "CUSTOMIZABLE CONTENT CAPTION",
    },
    {
      color: "#393E41",
      text: "SOCIAL MEDIA GUIDES",
    },
  ];

  return (
    <>
      <div className="container text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="mt-20 text-2xl font-bold">PRICING PLAN</p>
          <h1 className="mt-20 text-4xl font-bold text-center">clear and simple</h1>
          <h2 className="mt-10 text-4xl font-bold">$25</h2>
          <p className="my-5 font-bold">per week</p>
          <button className="rounded-lg bg-[#5ACBF0] px-10 py-3">
            start your free trial
          </button>
          <h1 className="mt-20 text-center text-5xl font-medium">
            and get immediately
          </h1>
          <div className="mt-10 grid w-full gap-11 md:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="relative flex md:h-[374px] h-[274px] w-full items-center justify-center rounded-[40px] lg:h-[474px]"
                style={{ backgroundColor: plan.color }}
              >
                <p className="absolute md:-left-10 left-5  text-[10rem] font-bold sm:text-[15rem] md:text-[13rem] lg:text-[15rem] 2xl:text-[25rem] mr-5">
                  3
                </p>
                <div className="ml-auto lg:mr-5 mr-1 text-center text-base font-bold sm:text-2xl md:text-lg lg:text-3xl">
                  {plan.text === "SOCIAL MEDIA GUIDES" ? (
                    <p className="leading-7">
                      SOCIAL MEDIA <br />
                      GUIDES
                    </p>
                  ) : (
                    plan.text.split(" ").map((line, idx) => (
                      <p className="leading-7" key={idx}>
                        {line} <br />
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mt-20">
        <SubscribeSection />
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
