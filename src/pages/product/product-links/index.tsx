import { memo } from "react";
import { NavLink } from "react-router-dom";

const ProductLinks = () => {
  return (
    <div className="mt-[78px]">
      <ul className="flex gap-[60px] text-[#999] max-sm:gap-[28px] max-[520px]:overflow-x-auto detail-ul">
        <li>
          <NavLink
            end={true}
            className={({ isActive }) =>
              `py-[24px] ${
                isActive ? "text-black border-b border-black" : "text-gray-500"
              }`
            }
            to={""}
          >
            Описание
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `py-[24px] ${
                isActive ? "text-black border-b border-black" : "text-gray-500"
              }`
            }
            to={"characteristics"}
          >
            Характеристики
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `py-[24px] ${
                isActive ? "text-black border-b border-black" : "text-gray-500"
              }`
            }
            to={"video"}
          >
            Видео
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `py-[24px] ${
                isActive ? "text-black border-b border-black" : "text-gray-500"
              }`
            }
            to={"image"}
          >
            Галерея
          </NavLink>
        </li>
      </ul>
      <div className="w-full border text-[#F2F2F2] mt-5"></div>
    </div>
  );
};

export default memo(ProductLinks);
