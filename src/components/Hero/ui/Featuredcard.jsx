import React from "react";

const FeaturedCard = (props) => {
  const {menuItem} = props;
  return (
    <div className="group bg-backGround rounded-lg shadow-sm flex flex-col items-start justify-start">
      <div className="">
        <img src={menuItem.image} alt="" className="object-cover rounded-tl-lg rounded-tr-lg" />
      </div>
      <div className="flex flex-col justify-between">
        <div className="text-3xl capitalize text-secondary font-bold -translate-y-10 px-4">{menuItem.name}</div>
        <div className="text-xl font-medium text-primary p-4">{menuItem.description}</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
