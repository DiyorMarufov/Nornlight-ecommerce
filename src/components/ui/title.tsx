import { memo, type FC } from "react";

interface Props {
  text: string;
  className?: string;
}

const Title: FC<Props> = ({ text, className }) => {
  return (
    <h1 className={`font-extrabold text-[40px] text-[#454545] ${className}`}>
      {text}
    </h1>
  );
};

export default memo(Title);
