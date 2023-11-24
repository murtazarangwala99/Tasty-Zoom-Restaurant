import React, { useEffect, useState } from "react";
import LightLogo from "../../resources/Light.png";
import HomeShimmerPage from "./HomeShimmerPage";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log("RestaurantMenu: ", json);
    setResInfo(json.data);
    // setResInfo(json.data?.cards[0]?.card?.card?.info);
    // console.log("Res Info: ", resInfo);
  };
  if (resInfo === null) {
    return <HomeShimmerPage />;
  }

  const { name, cuisines, costForTwoMessage, areaName, city, avgRatingString, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { deliveryTime } = resInfo?.cards[0]?.card?.card?.info?.sla;
  // object►data►cards►2►groupedCard►cardGroupMap->REGULAR-cards-2-card-card-itemCards-

  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  // );

  // console.log("DDDD");

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(itemCards);
  const color = avgRating >= 4 ? "green" : "red";

  return (
    <>
      <div className="res-menu-main">
        <div className="res-name">
          <div className="res-cusine">
            <h2>{name} </h2>
            <p>{cuisines.join(", ")} </p>
            <p>
              Area: {areaName}, {city}
            </p>
          </div>
          {/* Red and green Effect */}
          <div className="res-rating" style={{ color: color }}>
            <p>{avgRatingString}★</p>
          </div>
        </div>
        <div>
          <h3>Delivery in {deliveryTime} Minutes</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
        {/* Menu Card Started */}
        <div className="res-menu">
          <div>
            <h3>
              <li>Restaurant Menu</li>
            </h3>
          </div>
          {itemCards.map((item) => (
            <div className="res-menu-card" key={item.card?.info?.id}>
              <div className="res-menu-card-left">
                <h3>{item.card?.info?.name}</h3>
                <p>₹ {item.card?.info?.price / 100}</p>
                <p>{item.card?.info?.description}</p>
              </div>
              <div className="res-menu-img">
                <img src={LightLogo} alt="logo" />
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          ))}

          {/* TEst */}
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
