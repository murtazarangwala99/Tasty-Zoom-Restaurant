import React, { useState } from "react";
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList";

const RestaurantMenuCategory = ({ items, index }) => {
  // console.log("RestaurantMenuCategory: ", items);

  const handleClick = () => {
    console.log(index);
  };

  return (
    <>
      {/* Restaurant Menu Category List Accordian Header */}
      <div
        className="flex flex-wrap rounded-lg cursor-pointer justify-between my-4 bg-gray-100 shadow-lg p-4"
        onClick={handleClick}>
        <span className="font-bold text-lg">
          {items?.title} ({items?.itemCards.length})
        </span>
        <span className="mx-4"> ⬇ </span>
        {/* {showItems && <RestaurantMenuCategoryList items={items.itemCards} />} */}
        <RestaurantMenuCategoryList items={items.itemCards} />
      </div>
    </>
  );
};

export default RestaurantMenuCategory;
