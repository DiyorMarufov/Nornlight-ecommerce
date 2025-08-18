import { memo, type FC } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  className?: string;
  text: string;
}

const Button: FC<Props> = ({ text, className }) => {
  return (
    <button
      className={`flex items-center justify-center gap-5 h-[50px] w-[220px] rounded-[100px] border border-[#454545] text-[#454545] cursor-pointer hover:bg-[black] hover:text-[white] transition-all ${className}`}
    >
      <span>{text}</span>
      <FaArrowRight />
    </button>
  );
};

export default memo(Button);
