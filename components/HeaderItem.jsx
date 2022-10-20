import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1" />
      <p className="opacity-100 group-hover:opacity-100 tracking-widest font-medium" >{title}</p>
    </div>
  );
}

export default HeaderItem;
