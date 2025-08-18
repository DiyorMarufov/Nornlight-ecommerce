import React, { type FC } from "react";
import arrow from "../../assets/arrow.png";

interface CategoryCardProps {
  image: string;
  price: string;
  title: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ image, title, price }) => {
  return (
    <div className="flex flex-col sm:flex-row h-auto sm:h-[250px] rounded-[20px] bg-[rgba(242,242,242,1)] p-6 sm:p-0">
      <div className="flex flex-col justify-between sm:w-1/2 mb-4 sm:mb-0 pt-2 sm:pt-8 pl-0 sm:pl-8 pb-4 sm:pb-8">
        <h1
          title={title}
          className="text-[18px] sm:text-[20px] font-medium text-[#454545] line-clamp-1"
        >
          {title}
        </h1>
        <div className="flex items-center gap-[11px] max-[640px]:hidden">
          <span className="text-[16px] font-medium text-[#454545]">
            От {price}
          </span>
          <div>
            <img src={arrow} alt="arrow icon" className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center sm:w-1/2">
        <img
          src={image}
          className="h-[150px] sm:h-[90%] object-contain"
          alt={title}
        />
      </div>

      <div className="flex items-center gap-[11px] sm:hidden">
        <span className="text-[16px] font-medium text-[#454545]">
          От {price}
        </span>
        <div>
          <img src={arrow} alt="arrow icon" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CategoryCard);
