import React from "react";
import CategoryCard from "../ui/categoryCard";
import CardData from "../../data/cardData";
import image_10 from "../../assets/category/image_10.png";
import image_11 from "../../assets/category/image_11.png";
import arrow from "../../assets/arrow.png";
import Title from "../ui/title";
import Button from "../ui/button";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-[80px]">
      <div className="container">
        <div className="flex justify-between">
          <Title text="Каталог" className="max-md:text-[28px]" />
          <Link to={""}>
            <Button text="Весь каталог" className="max-sm:hidden" />
          </Link>
        </div>
        <div className="mt-[40px] flex justify-center">
          <div className="grid grid-cols-3 gap-[20px] max-[1300px]:grid-cols-2 max-sm:hidden">
            {CardData.map((item) => (
              <CategoryCard
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className="mt-[19px] flex items-center justify-center max-[1300px]:hidden">
          <div className="flex items-center justify-between gap-[20px]">
            <div className="w-[640px] h-[250px] bg-[rgba(242,242,242,1)] rounded-2xl flex items-center justify-between p-12 overflow-hidden">
              <div className="flex flex-col justify-between h-full py-4">
                <span className="text-2xl text-gray-800">
                  Светодиодные ленты
                </span>
                <div className="flex items-center justify-between w-[85px] text-sm font-medium">
                  От 540₽
                  <img src={arrow} alt="->" className="w-4 h-4" />
                </div>
              </div>
              <div className="w-[450px] -mr-16">
                <img
                  src={image_10}
                  alt="A coiled strip of LED lights with a white controller attached."
                />
              </div>
            </div>

            <div className="w-[640px] h-[250px] bg-[rgba(242,242,242,1)] rounded-2xl flex items-center justify-between p-12 overflow-hidden">
              <div className="flex flex-col justify-between h-full py-4">
                <span className="text-2xl text-gray-800">
                  Светодиодные ленты
                </span>
                <div className="flex items-center justify-between w-[85px] text-sm font-medium">
                  От 540₽
                  <img src={arrow} alt="->" className="w-4 h-4" />
                </div>
              </div>
              <div className="w-[450px] -mr-16">
                <img
                  src={image_11}
                  alt="A coiled strip of LED lights with a white controller attached."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden flex gap-5 overflow-auto category">
          {CardData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-auto rounded-[20px] bg-[rgba(242,242,242,1)] p-6 min-w-[160px]"
            >
              <h1
                title={item.title}
                className="text-[18px] font-medium text-[#454545] mb-4"
              >
                {item.title}
              </h1>

              <div className="flex justify-center items-center mb-4">
                <img
                  src={item.image}
                  className="h-[150px] object-contain"
                  alt={item.title}
                />
              </div>

              <div className="flex items-center gap-[11px]">
                <span className="text-[16px] font-medium text-[#454545]">
                  От {item.price}
                </span>
                <div>
                  <img src={arrow} alt="arrow icon" className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to={""}>
          <Button
            text="Весь каталог"
            className="sm:hidden max-sm:w-full mt-[32px] mb-[32px]"
          />
        </Link>

        <div className="sm:hidden flex gap-1.5 justify-center mb-[60px]">
          <div className="w-2 h-2 rounded-[100px] bg-[#A2A2A2]"></div>
          <div className="w-2 h-2 rounded-[100px] bg-[#EDEDED]"></div>
          <div className="w-2 h-2 rounded-[100px] bg-[#EDEDED]"></div>
          <div className="w-2 h-2 rounded-[100px] bg-[#EDEDED]"></div>
          <div className="w-2 h-2 rounded-[100px] bg-[#EDEDED]"></div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Category);
