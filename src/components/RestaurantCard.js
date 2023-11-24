import React from "react";
import { RES_CARD_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } = { ...props?.info };
  const { deliveryTime } = { ...props?.info?.sla };

  return (
    <div className="res-card">
      <div>
        <img
          src={RES_CARD_URL + cloudinaryImageId}
          alt="restaurant-logo"
          className="restaurant-logo"
        />
      </div>
      <div className="res-description">
        <h3>{name}</h3>
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
