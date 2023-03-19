import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function ButtonLeft({ onClick }: any) {
  return (
    <div
      className="absolute top-2/4 -translate-y-2/4 cursor-pointer -right-2 z-10 text-3xl"
      onClick={onClick}
    >
      <BsFillArrowRightCircleFill />
    </div>
  );
}