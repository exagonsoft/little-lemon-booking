import React from "react";
import Button from "../ui/Button";
import { heroSplash } from "../../assets/images";

const HeroSection = () => {
  return (
    <section
      id="heroSection"
      className="w-full md:max-w-[90%] flex flex-col md:flex-row justify-center items-center py-20 px-0 sm:px-12 gap-8 md:gap-20"
    >
      <div className="flex flex-col justify-center items-start w-full gap-6 md:w-1/2 px-4 md:px-0">
        <h1 className="text-5xl font-bold capitalize text-secondary">
          Experience the Flavor of Little Lemon
        </h1>
        <h2 className="text-2xl font-bold capitalize text-primary">
          Discover our rich, delicious Mediterranean dishes and immerse yourself
          in an unforgettable dining experience.
        </h2>
        <Button
          to="/booking"
          textColor="text-backGround"
          color="bg-secondary"
          text="Book Your Table Today!"
        />
      </div>
      <div className="flex justify-center items-center w-full  md:w-1/2 px-4 md:px-0">
        <img
          src={heroSplash}
          alt="Banner"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
