import React from "react";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full h-screen overflow-y-auto  pt-20 bg-backGround">
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
