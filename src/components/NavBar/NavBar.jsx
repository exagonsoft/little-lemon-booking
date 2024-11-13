import React, { useState } from "react";
import NavBarIcon from "./NavBarIcon";
import { navRoutes } from "../../data/navRoutes";
import useIsMobile from "../../hooks/isMobile";
import { FaBars } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

const SideBar = (props) => {
  return (
    <>
      {props.isOpen && (
        <div
          className={`w-full h-screen fixed top-0 right-0 ${
            props.isOpen ? "z-50" : "-z-10"
          } flex justify-end`}
        >
          <div className="fixed z-40 bg-black/45 w-full h-screen"></div>
          <div className="w-1/2 h-screen bg-primary/85 rounded-tl-md rounded-bl-md relative z-50 flex flex-col items-center justify-start">
            <div className="w-full p-4 flex justify-end items-center">
              <div
                className="p-1 rounded-md border border-backGround text-xl w-max"
                onClick={props.hideBar}
              >
                <FaWindowClose size={20} />
              </div>
            </div>
            <div className="w-full p-4 justify-start">
              <ul className="flex flex-col justify-center items-center gap-4">
                {navRoutes.map((route, indx) => (
                  <li key={indx} className="group px-4">
                    <a
                      href={route.link}
                      className="text-lg text-backGround transition-all ease-in-out duration-300 font-semibold group-hover:text-xl"
                    >
                      {route.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavBar = () => {
  const isMobile = useIsMobile();
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 p-4 flex justify-between items-center bg-primary shadow-md">
      <NavBarIcon />
      {!isMobile && (
        <ul className="flex justify-center items-center gap-4">
          {navRoutes.map((route, indx) => (
            <li key={indx} className="group px-4">
              <a
                href={route.link}
                className="text-lg text-backGround transition-all ease-in-out duration-300 font-semibold group-hover:text-xl"
              >
                {route.text}
              </a>
            </li>
          ))}
        </ul>
      )}
      {isMobile && (
        <>
          <div
            className="p-1 rounded-md border border-backGround text-xl"
            onClick={() => setShowSideBar((prevState) => !prevState)}
          >
            <FaBars size={20} />
          </div>
          <SideBar isOpen={showSideBar} hideBar={() => setShowSideBar(false)} />
        </>
      )}
    </nav>
  );
};

export default NavBar;
