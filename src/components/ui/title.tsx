import { memo, type FC } from "react";

interface Props {
  text: string;
}

const Title: FC<Props> = ({ text }) => {
  return <h1 className="font-extrabold text-[40px] text-[#454545]">{text}</h1>;
};

export default memo(Title);
