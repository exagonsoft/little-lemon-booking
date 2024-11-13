import React from "react";
import { menu } from "../../data/menu";
import FeaturedCard from "../ui/Featuredcard";

const FeaturedSection = () => {
  return (
    <section id="featuredMenu" className="w-full grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-8 bg-primary p-4 md:p-20">
      {menu.map((menu, indx) => (
        <FeaturedCard key={indx} menuItem={menu} />
      ))}
    </section>
  );
};

export default FeaturedSection;
