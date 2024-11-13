import React from "react";
import Logo from "../../assets/images/logo512.png";

const NavBarIcon = () => {
  return (
    <a href="/" className="flex w-max justify-start items-center">
      <img src={Logo} alt="" className="w-8 h-8" />
      <span className="font-bold capitalize text-backGround text-lg">Little Lemon</span>
    </a>
  );
};

export default NavBarIcon;
