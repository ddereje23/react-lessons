import Restaurant from "./Restaurant";
import { useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurants from "../hooks/useRestaurants";
import useRestaurantSearch from "../hooks/useRestaurantSearch";

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const {allRestaurants, filteredRestaurants, setFilteredRestaurants, isLoading} = useRestaurants();

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          disabled={isLoading}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? setFilteredRestaurants(useRestaurantSearch(searchText, allRestaurants))
              : null
          }
        />
        <button
          disabled={isLoading}
          onClick={() =>
            setFilteredRestaurants(useRestaurantSearch(searchText, allRestaurants))
          }
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : filteredRestaurants?.length === 0 ? (
        <h1>No Search Result </h1>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <Restaurant {...restaurant.data} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const Home = () => {
  return (
    <div className="home">
      <RestaurantList />
    </div>
  );
};

export default Home;
