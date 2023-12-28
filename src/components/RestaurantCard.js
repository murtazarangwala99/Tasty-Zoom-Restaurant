import React from "react";
import { RES_CARD_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
    sla,
  } = {
    ...props?.info,
  };
  // console.log(aggregatedDiscountInfoV3);

  // console.log(props);

  return (
    <div className="flex flex-col h-full bg-slate-200 hover:bg-green-200 hover:shadow-xl rounded-xl">
      <div>
        {aggregatedDiscountInfoV3 ? (
          <p className="absolute text-white mx-2 my-[120px] font-black text-lg">
            {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
          </p>
        ) : (
          ""
        )}
        <img
          src={RES_CARD_URL + cloudinaryImageId}
          alt="restaurant-logo"
          className="w-60 rounded-t-lg "
        />
      </div>
      <div className="w-60 p-2">
        <h3 className="font-bold underline">{name}</h3>
        <p>
          Rating: {avgRatingString} - {sla.deliveryTime} Minutes
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

/* 
info -> aggregatedDiscountInfoV3 {3} -> header -> subHeader
*/
