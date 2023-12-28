import React, { useState, useEffect } from "react";
import { API_LINK, RES_CARD_URL } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import HomeShimmerPage from "./HomeShimmerPage";
import { Link } from "react-router-dom";
const Home = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [btnName, setBtnName] = useState("Top Rated Restaurant");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://corsproxy.org/?" + API_LINK);
    // const data = await fetch("https://thingproxy.freeboard.io/fetch/" + API_LINK);
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D21.1702401%26lng%3D72.83106070000001%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log("Json: ", json);

    const restaurant_list =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList(restaurant_list);
    setFilteredRestaurant(restaurant_list);
    // console.log("RestaurantList: ", restaurantList);
  };

  const topRatedRestaurant = () => {
    const filterRes = restaurantList.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestaurant(filterRes);

    // console.log("Filtered: ", restaurantList);

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

  return (
    <>
      <div className="flex flex-col mx-8 my-4">
        <div className="flex justify-between py-4 pb-6 ">
          <div>
            <button
              className="px-6 py-2 bg-gray-300 rounded-lg font-semibold hover:underline"
              onClick={topRatedRestaurant}>
              {btnName}
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search Restaurant..."
              className="border-2 rounded-lg px-3 py-2"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-5 py-2 bg-gray-300 rounded-lg font-semibold hover:underline"
              onClick={() => {
                const searchedRestaurant = restaurantList.filter((res) =>
                  res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(searchedRestaurant);
                console.log("Search Restaurant Array: ", searchedRestaurant);
                console.log("Filtered List: ", restaurantList);
              }}>
              Search
            </button>
          </div>
        </div>
        {/* Restaurant Card */}
        <div className="flex flex-wrap gap-5 mx-6 my-2 mb-8 justify-between">
          {filteredRestaurant.map((res) => (
            // <div key={res?.info?.id}>
            <Link to={"/restaurant/" + res?.info.id} key={res?.info?.id}>
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
