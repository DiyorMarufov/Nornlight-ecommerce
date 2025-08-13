import React from "react";
import { FaArrowRight } from "react-icons/fa";
import feature from "../../assets/features/feature.svg";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="mt-[80px] mb-[100px]">
      <div className="container">
        <div className="flex justify-between">
          <h1 className="font-extrabold text-[40px] text-[#454545]">
            Почему NORNLIGHT?
          </h1>
          <Link to={"company"}>
            <button className="flex items-center gap-5 px-[48px] py-[14px] rounded-[100px] border border-[#454545] text-[#454545] cursor-pointer hover:bg-[black] hover:text-[white] transition-all">
              <span>О компании</span>
              <FaArrowRight />
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-[20px] mt-[40px]">
          <div className="border border-[#ECECEC] pl-[40px] pt-[40px]">
            <div>
              <img src={feature} alt="" />
            </div>
            <h2 className="pt-[79px] pb-[20px] font-bold text-[20px] text-[#454545]">
              Только проверенные бренды
            </h2>
            <p className="text-[#ADADAD] pb-[47px] w-[240px]">
              Бренды, проверенные временем и качеством
            </p>
          </div>

          <div className="border border-[#ECECEC] pl-[40px] pt-[40px]">
            <div>
              <img src={feature} alt="" />
            </div>
            <h2 className="pt-[79px] pb-[20px] font-bold text-[20px] text-[#454545]">
              Только проверенные бренды
            </h2>
            <p className="text-[#ADADAD] pb-[47px] w-[240px]">
              Бренды, проверенные временем и качеством
            </p>
          </div>
          <div className="border border-[#ECECEC] pl-[40px] pt-[40px]">
            <div>
              <img src={feature} alt="" />
            </div>
            <h2 className="pt-[79px] pb-[20px] font-bold text-[20px] text-[#454545]">
              Только проверенные бренды
            </h2>
            <p className="text-[#ADADAD] pb-[47px] w-[240px]">
              Бренды, проверенные временем и качеством
            </p>
          </div>

          <div className="border border-[#ECECEC] pl-[40px] pt-[40px]">
            <div>
              <img src={feature} alt="" />
            </div>
            <h2 className="pt-[79px] pb-[20px] font-bold text-[20px] text-[#454545]">
              Только проверенные бренды
            </h2>
            <p className="text-[#ADADAD] pb-[47px] w-[240px]">
              Бренды, проверенные временем и качеством
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features);
