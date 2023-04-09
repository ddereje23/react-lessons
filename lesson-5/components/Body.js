import Restaurant from "./Restaurant";
import { RESTAURANTS } from "../constants";
import { useState } from "react";
const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(RESTAURANTS);
  const handleSearch = (searchText, RESTAURANTS) => {
    if (!searchText) {
      return RESTAURANTS;
    }
    return RESTAURANTS.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? setRestaurants(handleSearch(searchText, RESTAURANTS))
              : setRestaurants(RESTAURANTS)
          }
        />
        <button
          onClick={() => setRestaurants(handleSearch(searchText, RESTAURANTS))}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Restaurant {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="body">
      <RestaurantList />
    </div>
  );
};

export default Body;
