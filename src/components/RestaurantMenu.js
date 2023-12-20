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
    // const data = await fetch("https://corsproxy.io/?" + MENU_API + resId);
    const data = await fetch("https://thingproxy.freeboard.io/fetch/" + MENU_API + resId);
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

  // console.log(
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
  // );

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);
  const color = avgRating >= 4 ? "green" : "red";

  return (
    <>
      <div className="text-center w-6/12 mx-auto my-8">
        <div className="flex justify-between mb-3 ">
          <div className="px-1 text-left">
            <h2 className="font-semibold">{name} </h2>
            <p className="text-gray-600"> {cuisines.join(", ")} </p>
            <p className="text-gray-600">
              {areaName}, {city}
            </p>
          </div>
          {/* Red and green Effect */}
          <div
            className="border-2 px-4 py-5 rounded-lg text-lg"
            style={{ color: color, borderColor: color }}>
            <p>{avgRatingString}★</p>
          </div>
        </div>
        <hr />
        <div className="text-left mt-2">
          <h3>Delivered in {deliveryTime} Minutes</h3>
          <h3>{costForTwoMessage}</h3>
        </div>
        {/* IF veg then show */}
        {/* <div>PURE VEG</div> */}
      </div>
    </>
  );
};
export default RestaurantMenu;
