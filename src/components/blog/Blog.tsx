import { memo } from "react";
import Title from "../ui/title";
import Button from "../ui/button";
import { Link } from "react-router-dom";
import blogImg from "../../assets/blog/Rectangle 12.png";
import arrowTop from "../../assets/blog/arrow-top.svg";

const Blog = () => {
  return (
    <section>
      <div className="container mb-[100px]">
        <div className="flex justify-between pb-[53px]">
          <Title text="Блог" />
          <Link to={""}>
            <Button text="Перейти в блог" />
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-[20px]">
          <div className="border-b border-b-[#DEDEDE]">
            <div className="">
              <img src={blogImg} className="w-full" alt="" />
            </div>
            <div className="">
              <div className="flex justify-between pt-[29px] pb-[20px]">
                <h1 className="font-medium text-[20px] w-[310px]">
                  Как правильно освещать дом снаружи?
                </h1>
                <div className="pr-[20px] pt-3">
                  <img src={arrowTop} alt="" />
                </div>
              </div>
              <p className="font-medium text-[16px] text-[#454545] pb-[28px]">
                01.01.2024
              </p>
            </div>
          </div>

          <div className="border-b border-b-[#DEDEDE]">
            <div className="">
              <img src={blogImg} className="w-full" alt="" />
            </div>
            <div className="">
              <div className="flex justify-between pt-[29px] pb-[20px]">
                <h1 className="font-medium text-[20px] w-[310px]">
                  Как правильно освещать дом снаружи?
                </h1>
                <div className="pr-[20px] pt-3">
                  <img src={arrowTop} alt="" />
                </div>
              </div>
              <p className="font-medium text-[16px] text-[#454545] pb-[28px]">
                01.01.2024
              </p>
            </div>
          </div>

          <div className="border-b border-b-[#DEDEDE]">
            <div className="">
              <img src={blogImg} className="w-full" alt="" />
            </div>
            <div className="">
              <div className="flex justify-between pt-[29px] pb-[20px]">
                <h1 className="font-medium text-[20px] w-[310px]">
                  Как правильно освещать дом снаружи?
                </h1>
                <div className="pr-[20px] pt-3">
                  <img src={arrowTop} alt="" />
                </div>
              </div>
              <p className="font-medium text-[16px] text-[#454545] pb-[28px]">
                01.01.2024
              </p>
            </div>
          </div>
        </div>

        <div className="flex mt-[100px] justify-between">
          <div>
            <h1 className="font-bold text-[#454545] text-[40px] w-[50%]">
              Производство светильников
            </h1>
          </div>
          <div className="flex flex-col gap-[25px] w-[50%]">
            <p className="font-medium text-[20px] text-[#454545]">
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент
              светильников для освещения вашего дома или офиса. У нас вы найдете
              разнообразные модели светильников, от современных и стильных до
              классических и элегантных. Мы предлагаем качественные и надежные
              светильники от лучших производителей, которые подарят вам комфорт
              и уют.
            </p>
            <p className="font-medium text-[20px] text-[#454545]">
              Покупая светильники в нашем интернет-магазине, вы получаете
              отличное соотношение цены и качества. Мы осуществляем доставку по
              всей России, чтобы каждый клиент мог насладиться прекрасным светом
              и удобством покупки онлайн. Обратитесь к нам сегодня и превратите
              ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Blog);
