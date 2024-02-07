import React, { useState } from "react";
import { ITEM_IMAGE, NO_IMAGE_FOUND } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const RestaurantMenuCategoryList = ({ items }) => {
  // console.log("RestaurantMenuCategoryList: ", items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch action
    dispatch(addItem(item));
  };

  return (
    <>
      <div className="w-full">
        {/* Restaurant Menu Category List Accordian Body */}
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 flex justify-between gap-6 border-gray-200 border-b-2 last:border-none text-left">
            {/* img Div */}
            <div className="w-3/12">
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
            {/* Description div */}
            <div className="w-9/12">
              <div className="py-2">
                <span className="font-medium">{item?.card?.info?.name}</span>
                <span>
                  - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                </span>

                <button
                  className="py-2 px-3 float-right mt-4 bg-black text-white rounded-lg shadow-lg "
                  onClick={() => handleAddItem(item)}>
                  Add +
                </button>
              </div>
              <p className="text-xs w-8/12 sm:w-10/12 text-left">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export const RestaurantListForCart = ({ items }) => {
  // Calculate total price
  const totalPrice = items.reduce((accumulator, currentItem) => {
    const price =
      (currentItem?.card?.info?.price || currentItem?.card?.info?.defaultPrice) / 100;
    return accumulator + price;
  }, 0);
  // console.log(totalPrice);
  return (
    <>
      <div className="w-full">
        {/* Restaurant Menu Category List Accordian Body */}
        {items.map((item) => (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 flex justify-between gap-6 border-gray-200 border-b-2 last:border-none text-left">
            <div className="w-3/12">
              {/* <div className="absolute"></div> */}
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

            <div className="w-9/12">
              <div className="py-2">
                <span className="font-medium">{item?.card?.info?.name}</span>
                <span>
                  - ₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs w-10/12 text-justify">{item?.card?.info?.description}</p>
            </div>
          </div>
        ))}
        <div>
          <p className="font-bold text-xl">Total Amount : {totalPrice}</p>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenuCategoryList;
// items={data.itemCards}
