import React from "react";
import logo from "../../assets/Group 64.svg";
import hamburger from "../../assets/Vector (2).svg";
import search from "../../assets/Vector (1).png";
import like from "../../assets/Vector (3).svg";
import set from "../../assets/Vector (4).svg";
import korzinka from "../../assets/Vector (5).svg";
import { NavLink } from "react-router-dom";
import ham from "../../assets/Vector (6).svg";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between mt-[12px]">
        <div>
          <ul className="flex gap-[27px] opacity-50 max-md:hidden">
            <li>
              <NavLink to={"#"}>О компании</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Доставка и опла</NavLink>та
            </li>
            <li>
              <NavLink to={"#"}>Возврат</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Гарантии</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Контакты</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Блог</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[24px] max-md:hidden">
            <li className="text-black">8 (800) 890-46-56</li>
            <li className="opacity-50">
              <NavLink to={"#"}>Заказать звонок</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex gap-[29px] mt-5 items-center max-md:flex max-md:flex-wrap">
        {/* Chap menyu */}
        <div className="hidden max-md:block">
          <img src={ham} alt="" className="min-w-[25px]" />
        </div>

        {/* Logo */}
        <div className="max-[500px]:w-[100px]">
          <img src={logo} alt="" className="max-w-[207px] max-md:[150px]" />
        </div>

        {/* Katalog tugmasi */}
        <div className="w-[153px] h-[50px] bg-[#454545] rounded-[100px] flex justify-center items-center gap-1 text-[16px] text-white max-md:hidden">
          <div>
            <img src={hamburger} alt="" />
          </div>
          <h1>Каталог</h1>
        </div>

        {/* Iconlar */}
        <div className="flex gap-8 ml-auto order-2 max-md:order-2">
          <div>
            <NavLink to={"#"}>
              <img width={20} src={like} alt="" className="mx-auto" />
            </NavLink>
            <p className="max-md:hidden">Избранное</p>
          </div>
          <div className="max-md:hidden">
            <NavLink to={"#"}>
              <img width={20} src={set} alt="" className="mx-auto" />
            </NavLink>
            <p>Сравнение</p>
          </div>
          <div>
            <NavLink to={""}>
              <img width={20} src={korzinka} alt="" className="mx-auto" />
            </NavLink>
            <p className="max-md:hidden">Корзина</p>
          </div>
        </div>

        {/* Qidiruv input — faqat kichik ekranda pastga tushadi */}
        <div className="w-[626px] h-[50px] border flex justify-between items-center rounded-[100px] max-md:w-full max-md:order-3">
          <input
            type="text"
            placeholder="Поиск по товарам"
            className="pl-6 opacity-30 outline-none w-full"
          />
          <img src={search} alt="" className="pr-4 max-sm:p-2" />
        </div>
      </div>

      <div className="w-full h-[44px] bg-[#F2F2F2] rounded-[100px] mt-[24px] flex items-center max-md:hidden">
        <ul className="flex gap-[52px] mx-auto">
          <li className="opacity-50">Светильники</li>
          <li>Люстры</li>
          <li>Лампы</li>
          <li>Настольные лампы</li>
          <li>Ночники</li>
          <li>Подстветка</li>
          <li>Уличное освещение</li>
          <li>Мебельные установки</li>
        </ul>
      </div>
    </header>
  );
};

export default React.memo(Header);
