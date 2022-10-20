import React from "react";

function HeaderItem({ Icon, title }) {
  return (
    <>
      <Icon className="h-50 w-50 text-blue-500" />
      <p className="my-50" >{title}</p>
    </>
  );
}

export default HeaderItem;
