import React from "react";
import Arte from "../../assets/productbrand/arte.svg";
import Divinare from "../../assets/productbrand/divinare.svg";
import Odeon from "../../assets/productbrand/odean.svg";
import Title from "../ui/title";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const brands = [Arte, Divinare, Odeon];

const Brands = () => {
  return (
    <section className="mt-[60px] mb-[100px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <Title text="Только проверенные бренды" />
          <div className="flex gap-2.5">
            <button className="w-[39px] h-[29px] flex items-center justify-center rounded-[100px] border cursor-pointer hover:bg-[black] hover:text-[white] hover:transition-all">
              <FaArrowLeft />
            </button>
            <button className="w-[39px] h-[29px] flex items-center justify-center rounded-[100px] border cursor-pointer hover:bg-[black] hover:text-[white] hover:transition-all">
              <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-[72px] sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {brands.map((src, index) => (
            <div
              key={index}
              className="flex justify-center border border-[#D9D9D9]"
            >
              <img
                src={src}
                alt={`Brand ${index}`}
                className=" h-[112px] p-4 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Brands);
