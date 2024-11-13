import React from "react";
import { usImage } from "../assets/images";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-backGround">
      <div className="relative">
        {/* Background Image */}
        <img
          src={usImage}
          alt="Little Lemon Restaurant"
          className="w-full max-w-md h-auto rounded-xl shadow-lg"
        />
        {/* Loading Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-secondary"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
