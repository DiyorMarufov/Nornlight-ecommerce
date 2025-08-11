import React from "react";
import norn from "../../assets/Group 64.svg";
import cards from "../../assets/image 1.svg";
import vk from "../../assets/Group 59.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F2F2F2]">
      <div className="container mx-auto flex py-[79px] max-[1100px]:text-[15px] max-[940px]:text-[13px] max-md:flex max-md:flex-col">
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
        <div className="flex flex-col gap-[32px] ml-[146px] max-[1100px]:ml-[120px] max-[850px]:ml-[100px] max-md:ml-0 max-md:mt-[32px]">
          <h1 className="text-2xl">Покупателям</h1>
          <ul className="flex flex-col gap-[27px]">
            <li className="opacity-50">
              <NavLink to={"#"}>О компании</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Доставка и оплата</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Возврат</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Гарантии</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Контакты</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Блог</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[32px] ml-[153px] max-[1100px]:ml-[120px] max-[850px]:ml-[100px] max-md:ml-0 max-md:mt-[36px]">
          <h1 className="text-2xl">Товары</h1>
          <ul className="flex flex-col gap-[27px]">
            <li className="opacity-50">
              <NavLink to={"#"}>Люстры</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Светильники</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Бра</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Торшеры</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Комплектуюшие</NavLink>
            </li>
            <li className="opacity-50">
              <NavLink to={"#"}>Настольные лампы</NavLink>
            </li>
          </ul>
        </div>
        <ul className="flex flex-col gap-[32px] ml-[71px] max-[1100px]:ml-[50px] max-[850px]:ml-[30px] justify-center max-md:ml-0 max-md:mt-[27px]">
          <li className="opacity-50">
            <NavLink to={"#"}>Споты</NavLink>
          </li>
          <li className="opacity-50">
            <NavLink to={"#"}>Трековые светильники</NavLink>
          </li>
          <li className="opacity-50">
            <NavLink to={"#"}>Уличные светильники</NavLink>
          </li>
          <li className="opacity-50">
            <NavLink to={"#"}>Технические светильники</NavLink>
          </li>
          <li className="opacity-50">
            <NavLink to={"#"}>Светодиодные ленты</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
