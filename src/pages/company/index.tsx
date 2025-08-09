import React from "react";
import chiziq from "../../assets/Vector 5.svg";
import { NavLink } from "react-router-dom";

const Company = () => {
  return (
    <div className="container">
      <ul className="flex gap-3 mt-12 items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "opacity-100" : "opacity-30"
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <img src={chiziq} alt="" />
        </li>
        <li>
          <NavLink
            to="#"
            className={({ isActive }) =>
              isActive ? "opacity-100" : "opacity-30"
            }
          >
            О компании
          </NavLink>
        </li>
      </ul>
      <div className="container flex items-center gap-[102px] py-[15px] pb-[100px] max-[800px]:flex max-[800px]:flex-wrap max-[800px]:w-full ">
        <div>
          <h1 className="text-[64px] font-bold items-end">О компании</h1>
          <div className="w-[530px] h-[253px] bg-[#F2F2F2] rounded-[15px] max-[1330px]:w-[500px] max-[1330px]:h-[230px] max-[1080px]:w-[400px] max-[800px]:w-full">
            <h1 className="text-[64px] font-bold mt-[32px] ml-[32px]">170+</h1>
            <h2 className="text-2xl font-medium mt-[83px] ml-[32px]">
              Товаров
            </h2>
          </div>
          <div className="w-[530px] h-[253px] bg-[#F2F2F2] rounded-[15px] max-[1330px]:w-[500px] max-[1330px]:h-[230px] max-[1080px]:w-[400px]">
            <h1 className="text-[64px] font-bold mt-[32px] ml-[32px]">1000+</h1>
            <h2 className="text-2xl font-medium mt-[83px] ml-[32px]">
              Довольных покупателей
            </h2>
          </div>
          <div className="w-[530px] h-[253px] bg-[#F2F2F2] rounded-[15px] max-[1330px]:w-[500px] max-[1330px]:h-[230px] max-[1080px]:w-[400px]">
            <h1 className="text-[64px] font-bold mt-[32px] ml-[32px]">170+</h1>
            <h2 className="text-2xl font-medium mt-[83px] ml-[32px]">
              Товаров
            </h2>
          </div>
        </div>
        <p className="w-[632px] text-[20px]  p-1 max-[1330px]:text-[18px] max-[1161px]:text-[16px] max-[1080px]:text-[16px] max-[973px]:text-[14px] max-[872px]:text-[12px] max-[800px]:text-[16px]">
          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
          для освещения вашего дома или офиса. У нас вы найдете разнообразные
          модели светильников, от современных и стильных до классических и
          элегантных. Мы предлагаем качественные и надежные светильники от
          лучших производителей, которые подарят вам комфорт и уют. <br />
          <br />
          <br />
          Покупая светильники в нашем интернет-магазине, вы получаете отличное
          соотношение цены и качества. Мы осуществляем доставку по всей России,
          чтобы каждый клиент мог насладиться прекрасным светом и удобством
          покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
          тепла и света с NORNLIGHT! <br />
          <br />
          <br />
          Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
          для освещения вашего дома или офиса. У нас вы найдете разнообразные
          модели светильников, от современных и стильных до классических и
          элегантных. Мы предлагаем качественные и надежные светильники от
          лучших производителей, которые подарят вам комфорт и уют. <br />
          <br />
          <br />
          Покупая светильники в нашем интернет-магазине, вы получаете отличное
          соотношение цены и качества. Мы осуществляем доставку по всей России,
          чтобы каждый клиент мог насладиться прекрасным светом и удобством
          покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис
          тепла и света с NORNLIGHT!
        </p>
      </div>
    </div>
  );
};

export default React.memo(Company);
