import React from "react";
import CategoryCard from "../ui/categoryCard";
import CardData from "../../data/cardData";
import image_10 from "../../assets/category/image_10.png";
import image_11 from "../../assets/category/image_11.png";
import arrow from "../../assets/arrow.png";

const Category = () => {
  return (
    <div>
      <div className="container">
        <div className="mt-[20px] flex items-center justify-center">
          <div className="grid grid-cols-3 gap-[20px]">
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
        <div className="mt-[19px] flex items-center justify-center">
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
      </div>
    </div>
  );
};

export default React.memo(Category);
