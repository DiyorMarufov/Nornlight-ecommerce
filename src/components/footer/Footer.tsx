import React from "react";
import norn from "../../assets/Group 64.svg";
import cards from "../../assets/image 1.svg";
import vk from "../../assets/Group 59.svg";

const Footer = () => {
  return (
    <footer className=" bg-[#F2F2F2]">
      <div className="container mx-auto flex py-[79px]">
        <div className="flex flex-col gap-9 justify-center">
          <div className="ml-2">
            <img src={norn} alt="" />
          </div>
          <h1 className="text-2xl">8 (800) 890-46-56</h1>
          <div>
            <img src={cards} alt="" />
          </div>
          <p className="opacity-50">Политика конфидециальности</p>
          <p className="opacity-50">Пользовательское соглашение</p>
          <div className="flex gap-3">
            <img src={vk} alt="" />
            <img src={vk} alt="" />
            <img src={vk} alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-[32px] ml-[146px]">
          <h1 className="text-2xl">Покупателям</h1>
          <div className="flex flex-col gap-[27px]">
            <p className="opacity-50">О компании</p>
            <p className="opacity-50">Доставка и оплата</p>
            <p className="opacity-50">Возврат</p>
            <p className="opacity-50">Гарантии</p>
            <p className="opacity-50">Контакты</p>
            <p className="opacity-50">Блог</p>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] ml-[153px]">
          <h1 className="text-2xl">Товары</h1>
          <div className="flex flex-col gap-[27px]">
            <p className="opacity-50">Люстры</p>
            <p className="opacity-50">Светильники</p>
            <p className="opacity-50">Бра</p>
            <p className="opacity-50">Торшеры</p>
            <p className="opacity-50">Комплектуюшие</p>
            <p className="opacity-50">Настольные лампы</p>
          </div>
        </div>
        <div className="flex flex-col gap-[32px] ml-[71px] justify-center">
          <p className="opacity-50">Споты</p>
          <p className="opacity-50">Трековые светильники</p>
          <p className="opacity-50">Уличные светильники</p>
          <p className="opacity-50">Технические светильники</p>
          <p className="opacity-50">Светодиодные ленты</p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
