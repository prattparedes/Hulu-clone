import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightingBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <header className="">
      <div>
        <HeaderItem title="HOME" Icon={HomeIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/0/03/Hulu_logo_%282014%29.svg"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
