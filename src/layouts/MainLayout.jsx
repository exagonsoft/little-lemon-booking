import React from "react";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex justify-center h-screen overflow-y-auto  !py-20 bg-backGround">
      <NavBar />
      {children}
    </div>
  );
};

export default MainLayout;
