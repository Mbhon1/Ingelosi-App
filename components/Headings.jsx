import React from "react";

const Headings = (props) => {
  return (
    <div className="text-black text-[32px] font-medium flex items-center gap-4 py-10">
      {props.title}
      <div className="bg-emerald-700 h-[2px] w-[40px] translate-y-1"></div>
    </div>
  );
};

export default Headings;
