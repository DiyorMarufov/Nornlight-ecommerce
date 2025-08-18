import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/button";
import Title from "../ui/title";
import { featuresData } from "../../static";

const Features = () => {
  return (
    <section className="mt-[100px] mb-[90px]">
      <div className="container">
        <div className="flex justify-between">
          <Title text="Почему NORNLIGHT?" className="max-sm:text-[28px]"/>
          <Link to={"company"}>
            <Button text="О компании" className="max-md:hidden" />
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-[20px] mt-[40px] max-lg:grid-cols-3 max-md:grid-cols-2">
          {featuresData?.map((feature) => (
            <div
              key={feature.id}
              className="border border-[#ECECEC] pl-[40px] pt-[40px] max-sm:pl-4"
            >
              <div>
                <img src={feature.image} className="max-sm:w-[40px]" alt="" />
              </div>
              <h2 className="pt-[79px] pb-[20px] font-bold text-[20px] text-[#454545] break-words max-md:text-[16px] max-sm:pt-2.5 max-sm:pb-2">
                {feature.title}
              </h2>
              <p className="text-[#ADADAD] pb-[47px] pr-8 break-words max-md:text-[14px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <Link to={"company"}>
          <Button text="О компании" className="md:hidden max-md: w-full mt-8" />
        </Link>
      </div>
    </section>
  );
};

export default React.memo(Features);
