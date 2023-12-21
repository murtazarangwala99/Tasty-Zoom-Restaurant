import React from "react";
import { ITEM_IMAGE, NO_IMAGE_FOUND } from "../utils/constant";

const RestaurantMenuCategoryList = ({ items }) => {
    // console.log("RestaurantMenuCategoryList: ", items);
  return (
    <>
      <div>
        {/* Restaurant Menu Category List Accordian Body */}
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2  flex justify-between gap-6 border-gray-200 border-b-2 text-left">
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-medium">{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs ">{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12">
              <div className="absolute">
                <button
                  className="py-2 px-3 mx-12 my-14 bg-black text-white rounded-lg shadow-lg "
                  //   onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img
                src={
                  item?.card?.info?.imageId
                    ? ITEM_IMAGE + item?.card?.info?.imageId
                    : NO_IMAGE_FOUND
                }
                alt="Item-Image"
                className="w-full h-24"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default RestaurantMenuCategoryList;
// items={data.itemCards}
