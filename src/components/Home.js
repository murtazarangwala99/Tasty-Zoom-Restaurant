import React, { useState, useEffect } from "react";
import { API_LINK } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import HomeShimmerPage from "./HomeShimmerPage";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [btnName, setBtnName] = useState("Top Rated Restaurant");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_LINK);
    const json = await data.json();
    // console.log("Json: ", json);

    const restaurant_list =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList(restaurant_list);
    setFilteredRestaurant(restaurant_list);
  };

  const topRatedRestaurant = () => {
    const filterRes = restaurantList.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestaurant(filterRes);

    if (btnName == "Top Rated Restaurant") {
      setBtnName("Show All Restaurant");
    } else if (btnName == "Show All Restaurant") {
      setFilteredRestaurant(restaurantList);
      setBtnName("Top Rated Restaurant");
    }
  };

  if (restaurantList.length === 0 || filteredRestaurant.length === 0) {
    return <HomeShimmerPage />;
  }

  if (onlineStatus === false) {
    return (
      <h1 className="text-center h-full my-56 text-red-600 font-extrabold text-2xl">
        Looks Like You are offline!! Please Check your Internet Connection
      </h1>
    );
  }

  return (
    <>
      <div className="flex flex-col mx-8 my-4">
        <div className="flex justify-between gap-2 sm:gap-0 flex-wrap py-4 pb-6 ">
          <div>
            {/* Top Rated Restaurant Button */}
            <button
              className="px-2 sm:px-6 py-2 bg-gray-300 rounded-lg font-semibold hover:underline"
              onClick={topRatedRestaurant}>
              {btnName}
            </button>
          </div>
          {/* Search Restaurant Section */}
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="search"
              placeholder="Search Restaurant..."
              className="border-2 rounded-lg px-2 sm:px-3 py-1 sm:py-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-2 sm:px-5 py-2 bg-gray-300 rounded-lg font-semibold hover:underline"
              onClick={() => {
                const searchedRestaurant = restaurantList.filter((res) =>
                  res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(searchedRestaurant);
                // console.log("Search Restaurant Array: ", searchedRestaurant);
                // console.log("Filtered List: ", restaurantList);
              }}>
              Search
            </button>
          </form>
        </div>
        {/* Restaurant Card */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-5 mx-6 my-2 mb-8 justify-between items-center sm:items-stretch ">
          {filteredRestaurant.map((res) => (
            // <div key={res?.info?.id}>
            <Link to={"/restaurant/" + res?.info.id} key={res?.info?.id}>
              {/* {res?.info?.aggregatedDiscountInfoV3} */}
              <RestaurantCard key={res?.info?.id} {...res} />
            </Link>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
