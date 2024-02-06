import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RestaurantListForCart } from "./RestaurantMenu/RestaurantMenuCategoryList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center m-4 p-4 pb-[450px] md:pb-80">
        <h1 className="text-4xl font-bold">Cart</h1>
        <h2 className="m-4 text-2xl font-bold">No items Found in Cart</h2>
      </div>
    );
  }

  return (
    <div className="text-center m-4 mb-48 p-5">
      <h1 className="text-4xl font-bold">Cart</h1>

      <div className="w-6/12 m-auto">
        <button
          className="px-4 py-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}>
          Clear Cart
        </button>
        <RestaurantListForCart items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
