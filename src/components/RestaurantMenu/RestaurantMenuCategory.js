import React, { useState } from "react";
import RestaurantMenuCategoryList from "./RestaurantMenuCategoryList";

const RestaurantMenuCategory = ({ items, showItems, setShowIndex, index }) => {
  // console.log("RestaurantMenuCategory: ", items);
  // const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    showItems ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div>
      {/* Accordian Header */}
      <div>
        <div className="mx-auto my-4 rounded-lg bg-gray-100 shadow-lg p-4">
          <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">
              {items?.title} ({items?.itemCards.length})
            </span>
            <span>🔽</span>
          </div>
          {showItems && <RestaurantMenuCategoryList items={items.itemCards} />}
        </div>
        {/* Accordian Body */}
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;

// <div>
//   {/* Restaurant Menu Category List Accordian Header */}
//   <div
//     className="flex flex-wrap rounded-lg cursor-pointer justify-between my-4 bg-gray-100 shadow-lg p-4"
//     onClick={handleClick}>
//     <span className="font-bold text-lg">
//       {items?.title} ({items?.itemCards.length})
//     </span>
//     <span className="mx-4"> ⬇ </span>
//     {/* {showItems && <RestaurantMenuCategoryList items={items.itemCards} />} */}
//     <RestaurantMenuCategoryList items={items.itemCards} />
//   </div>
// </div>
