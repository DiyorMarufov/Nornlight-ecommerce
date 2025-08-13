import { memo } from "react";

const Loader = () => {
  return (
    <div className="loader__wrapper flex flex-col gap-3">
      <div className="loader"></div>
      <div > Loading...</div>
    </div>
  );
};

export default memo(Loader);
