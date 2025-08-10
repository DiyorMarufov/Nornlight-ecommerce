import React from "react";
import detailImg from "../.././assets/productDetail/detail.png";
import arrowup from "../.././assets/productDetail/arrowup.svg";
import arrowdown from "../.././assets/productDetail/arrowdown.svg";
import mediaArrowLeft from "../.././assets/productDetail/media-arrow-left.svg";
import mediaArrowRight from "../.././assets/productDetail/media-arrow-right.svg";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";
import { ProductContent } from "../../static";
import ProductLinks from "./product-links";
import { Outlet } from "react-router-dom";

const ProductDetail = () => {
  return (
    <section className="mt-[102px] pb-[127px]">
      <div className="container">
        <div className="flex max-xl:flex-col gap-[30px]">
          <div
            className="flex w-1/2 max-xl:w-[100%] max-sm:flex-col-reverse"
            style={{ boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.4)" }}
          >
            <div className="flex flex-col gap-[17px] p-4 pt-[49px] max-sm:hidden">
              <div className="cursor-pointer">
                <img src={arrowup} alt="Up" className="w-5 h-5 mx-auto" />
              </div>
              <div className="flex flex-col gap-[17px]">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <img key={i} width={58} src={detailImg} />
                ))}
              </div>
              <div>
                <img
                  src={arrowdown}
                  alt="Down"
                  className="w-5 h-5 mx-auto cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-center p-7 max-xl:w-[100%]">
              <img src={detailImg} alt="" />
            </div>
          </div>

          <div className="flex items-center">
            <div className="cursor-pointer">
              <img
                src={mediaArrowLeft}
                alt="Up"
                className="w-5 h-5 cursor-pointer sm:hidden"
              />
            </div>
            <div className="flex flex-col gap-[17px] sm:hidden max-sm:flex-row max-sm:mx-auto max-sm:overflow-x-auto detail">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <img key={i} width={58} src={detailImg} />
              ))}
            </div>
            <div>
              <img
                src={mediaArrowRight}
                alt="Down"
                className="w-5 h-5 cursor-pointer sm:hidden"
              />
            </div>
          </div>
          <div className="w-1/2 pl-2 max-xl:w-[100%] max-xl:pl-0">
            <h1 className="font-bold text-5xl text-[#454545] max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
              Встраиваемый <br /> Светильник Novotech
            </h1>

            <div className="flex justify-between flex-wrap mt-[38px] gap-[54px]">
              <div className="flex gap-[53px] max-[320px]:flex-wrap">
                <div>
                  <del className="font-medium text-[12px] text-[#9F9F9F]">
                    7 000P
                  </del>
                  <p className="font-bold text-[20px] text-[#454545] max-sm:text-[24px] min-w-max">
                    6 399₽
                  </p>
                </div>
                <div className="bg-[#454545] text-[#ffffff] rounded-[100px] flex items-center gap-3 px-[46px] cursor-pointer max-[350px]:px-[40px] max-[330px]:px-[35px] max-[320px]:px-[32px] max-[320px]:py-[18px]">
                  <FaShoppingCart />
                  <p className="min-w-max">В корзину</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-[50px] h-[50px] border border-[#454545] rounded-[50%] flex items-center justify-center cursor-pointer">
                  <FaHeart className="w-[20px] h-[18px]" />
                </div>

                <div className="w-[50px] h-[50px] border border-[#454545] rounded-[50%] flex items-center justify-center cursor-pointer">
                  <HiOutlineChartBar className="w-[22px] h-[22px]" />
                </div>
              </div>
            </div>

            <div className="w-full border text-[#F2F2F2] mt-10"></div>

            <div className="mt-10 grid grid-cols-2 gap-x-[50px] gap-y-[40px] max-sm:grid-cols-1">
              {ProductContent?.map((prod) => (
                <div key={prod.id} className="flex">
                  <div className="w-[271px] flex items-center justify-between border-b-2 border-b-[#F2F2F2] pb-[17px] max-xl:w-full max-sm:w-full">
                    <span className="font-medium text-[14px] text-[#999]">
                      {prod.title}
                    </span>
                    <span className="font-medium text-[16px] text-[#454545]">
                      {prod.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <ProductLinks />
        <Outlet />
      </div>
    </section>
  );
};

export default React.memo(ProductDetail);
