import React from "react";
import { ShoppingCart } from "lucide-react";
import { useFetch } from "../../hooks/useFetch";
import type { IProduct } from "../../types";
import Button from "../ui/button";
import { Link } from "react-router-dom";
import Title from "../ui/title";

const ProductView = () => {
  const { data } = useFetch<{ products: IProduct[] }>("products");
  const products = data?.products ?? [];
  return (
    <section>
      <div className="container px-4">
        <div className="flex justify-between items-center mb-6">
          <Title text="Популярные товары" className="max-md:text-[28px]" />
          <Link to={""}>
            <Button text="Все товары" className="max-sm:hidden" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-60 object-contain"
                />
              </div>

              <div className="pl-[27px]">
                <p className="text-[20px] font-medium text-[#454545] line-clamp-1">
                  {product.title}
                </p>

                <div className="pt-[24px]">
                  <span className="text-sm text-[#9F9F9F] line-through">
                    {product.discountPercentage}
                  </span>
                </div>

                <div className="flex items-center justify-between pb-[28px] pr-[16px]">
                  <span className="text-[20px] font-bold">
                    {product.price}P
                  </span>
                  <button className="bg-black text-white w-14 h-9 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-800 transition-all">
                    <ShoppingCart size={18} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link to={""}>
          <Button text="Все товары" className="sm:hidden max-sm:w-full mt-8" />
        </Link>
      </div>
    </section>
  );
};

export default React.memo(ProductView);
