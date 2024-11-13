import React from "react";

const FeaturedCard = (props) => {
  const { menuItem } = props;
  return (
    <div className="group bg-backGround rounded-lg shadow-sm flex flex-col items-start justify-start">
      <div className="relative">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-t from-black/75 to-transparent"></div>
        <img
          src={menuItem.image}
          alt=""
          className="object-cover rounded-tl-lg rounded-tr-lg group-hover:scale-105 relative transition-all ease-in-out duration-[400] group-hover:rounded-lg group-hover:z-20 group-hover:shadow-lg group-hover:-translate-y-1"
        />
      </div>
      <div className="flex flex-col justify-start -translate-y-8 relative z-20">
        <div className="text-xl capitalize text-secondary font-bold  px-4">
          {menuItem.name}
        </div>
        <div className="text-sm text-ellipsis overflow-hidden max-h-[4.5rem] font-medium text-primary p-4">
          {menuItem.description}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
