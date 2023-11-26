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
    const data = await fetch("https://corsproxy.io/?" + API_LINK);
    const json = await data.json();
    console.log("Json: ", json);

    const restaurant_list =
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setRestaurantList(restaurant_list);
    setFilteredRestaurant(restaurant_list);
    console.log("RestaurantList: ", restaurantList);
  };

  const topRatedRestaurant = () => {
    const filterRes = restaurantList.filter((res) => res?.info?.avgRating > 4);
    setFilteredRestaurant(filterRes);

    console.log("Filtered: ", restaurantList);

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
      <div className="main">
        <div className="body-top">
          <div>
            <button className="btn" onClick={topRatedRestaurant}>
              {btnName}
            </button>
          </div>
          <div className="search-div">
            <input
              type="text"
              placeholder="Search Restaurant..."
              className="input-search"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="btn"
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
        <div className="res-card-container">
          {filteredRestaurant.map((res) => (
            <div className="res-cards">
              <Link to={"/restaurant/" + res?.info.id} key={res?.info?.id}>
                <RestaurantCard key={res?.info?.id} {...res} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
