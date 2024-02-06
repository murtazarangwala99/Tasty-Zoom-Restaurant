import React, { useEffect, useState } from "react";
import HomeShimmerPage from "../HomeShimmerPage";
import { useParams } from "react-router-dom";
import { MENU_API, MOBILE_MENU_API } from "../../utils/constant";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    if (window.innerWidth < 640) {
      apiUrl = MOBILE_MENU_API;
    } else {
      apiUrl = MENU_API;
    }
    const data = await fetch(apiUrl + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  // TODO: Add different Shimmer for Restaurant Menu
  if (resInfo === null) {
    return <HomeShimmerPage />;
  }

  const {
    name,
    cuisines,
    costForTwoMessage,
    areaName,
    city,
    avgRatingString,
    avgRating,
    veg,
    sla,
  } = resInfo?.cards[0]?.card?.card?.info || resInfo?.cards[2]?.card?.card?.info;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);

  const itemsData =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards ||
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards;

  const items = itemsData.filter(
    (i) =>
      i?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  const color = avgRating >= 4 ? "green" : "red";

  return (
    <>
      <div className="text-center w-11/12 sm:w-6/12 mx-auto my-8">
        <div className="flex justify-between mb-3 ">
          <div className="px-1 text-left">
            <h2 className="font-semibold text-lg underline">{name} </h2>
            <p className="text-gray-600"> {cuisines.join(", ")} </p>
            <p className="text-gray-600">
              {areaName}, {city}
            </p>
          </div>
          {/* Red and green color change as per Rating*/}
          <div
            className="border-2 px-4 py-5 rounded-lg text-lg"
            style={{ color: color, borderColor: color }}>
            <p>{avgRatingString}★</p>
          </div>
        </div>
        <hr />
        <div className="text-left mt-2">
          <h3>Delivered in {sla.deliveryTime} Minutes</h3>
          <h3>{costForTwoMessage}</h3>
          <h3 className="text-green-600">{veg == true ? "🟢 PURE VEG" : ""}</h3>
        </div>
        <p className="text-center mt-2 underline font-bold text-lg">Restaurant Menu</p>
        {/* Restaurant Menu Categories */}
        {items.map((item, index) => (
          <RestaurantMenuCategory
            key={item?.card?.card?.title}
            items={item?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={(index) => {
              setShowIndex(index);
            }}
            index={index}
          />
        ))}
      </div>
    </>
  );
};
export default RestaurantMenu;
