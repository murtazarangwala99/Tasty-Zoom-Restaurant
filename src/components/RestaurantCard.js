import React from "react";
import { RES_CARD_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } = {
    ...props?.info,
  };
  const { deliveryTime } = { ...props?.info?.sla };

  // console.log(props);

  return (
    <div className="flex flex-col bg-slate-200 hover:bg-green-200 hover:shadow-xl rounded-xl">
      <div>
        <img
          src={RES_CARD_URL + cloudinaryImageId}
          alt="restaurant-logo"
          className="w-60 rounded-t-lg"
        />
      </div>
      <div className="w-60 h-44 p-2">
        <h3 className="font-bold underline">{name}</h3>
        <p>
          Rating: {avgRatingString} - {deliveryTime} Minutes
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
