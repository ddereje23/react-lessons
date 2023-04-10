import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const RestaurantList = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // api call
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5009028&lng=77.2100388&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    const data = json?.data?.cards[2]?.data?.data?.cards;
    console.log(data);
    setAllRestaurants(data);
    setFilteredRestaurants(data);
  };
  const handleSearch = (searchText, allRestaurants) => {
    if (!searchText) {
      return allRestaurants;
    }
    return allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
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
              ? setFilteredRestaurants(handleSearch(searchText, allRestaurants))
              : null
          }
        />
        <button
          onClick={() =>
            setFilteredRestaurants(handleSearch(searchText, allRestaurants))
          }
        >
          Search
        </button>
      </div>
      {allRestaurants?.length === 0 ? (
        <ShimmerUI />
      ) : filteredRestaurants?.length === 0 ? (
        <h1>No Search Result </h1>
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => (
            <Restaurant {...restaurant.data} key={restaurant.data.id} />
          ))}
        </div>
      )}
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
