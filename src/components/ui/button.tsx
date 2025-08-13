import { memo, type FC } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  classname?: string;
  text: string;
}

const Button: FC<Props> = ({ text }) => {
  return (
    <button className="flex items-center gap-5 px-[48px] py-[14px] rounded-[100px] border border-[#454545] text-[#454545] cursor-pointer hover:bg-[black] hover:text-[white] transition-all">
      <span>{text}</span>
      <FaArrowRight />
    </button>
  );
};

export default memo(Button);
