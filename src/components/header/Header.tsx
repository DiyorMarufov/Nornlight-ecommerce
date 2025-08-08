import React from "react";
import logo from "../../assets/Group 64.svg";
import hamburger from "../../assets/Vector (2).svg";
import search from "../../assets/Vector (1).png";
import like from "../../assets/Vector (3).svg";
import set from "../../assets/Vector (4).svg";
import korzinka from "../../assets/Vector (5).svg";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between mt-[12px]">
        <div>
          <ul className="flex gap-[27px] opacity-50">
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Гарантии</li>
            <li>Контакты</li>
            <li>Блог</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-[24px]">
            <li className="text-black">8 (800) 890-46-56</li>
            <li className="opacity-50">Заказать звонок</li>
          </ul>
        </div>
      </nav>
      <div className="flex gap-[29px] mt-5">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="w-[153px] h-[50px] bg-[#454545] rounded-[100px] flex justify-center items-center gap-1 text-[16px] text-white">
          <div>
            <img src={hamburger} alt="" />
          </div>
          <h1>Каталог</h1>
        </div>
        <div className="w-[626px] h-[50px] border flex justify-between items-center rounded-[100px]">
          <input
            type="text"
            placeholder="Поиск по товарам"
            className="pl-6 opacity-30 outline-none"
          />
          <img src={search} alt="" className="pr-4" />
        </div>
        <div className="flex gap-8">
          <div>
            <img width={20} src={like} alt="" className="mx-auto" />
            <p>Избранное</p>
          </div>
          <div>
            <img width={20} src={set} alt="" className="mx-auto" />
            <p>Сравнение</p>
          </div>
          <div>
            <img width={20} src={korzinka} alt="" className="mx-auto" />
            <p>Корзина</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[44px] bg-[#F2F2F2] rounded-[100px] mt-[24px] flex gap-[52px] justify-center items-center">
        <p className="opacity-50">Светильники</p>
        <p>Люстры</p>
        <p>Лампы</p>
        <p>Настольные лампы</p>
        <p>Ночники</p>
        <p>Подстветка</p>
        <p>Уличное освещение</p>
        <p>Мебельные установки</p>
      </div>
    </header>
  );
};

export default React.memo(Header);
