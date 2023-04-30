import { useState, useEffect } from "react";
const useRestaurants = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
    setAllRestaurants(data);
    setFilteredRestaurants(data);
  };
    return {allRestaurants, filteredRestaurants, setFilteredRestaurants, isLoading}
}

export default useRestaurants;