import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const useRestaurantDetail = ()=> {
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5009028&lng=77.2100388&restaurantId=" +
        resId
    );
    const json = await response.json();
    const data = json?.data?.cards?.[0]?.card?.card?.info;
    setRestaurantDetail(data);
  }

  return restaurantDetail;
}

export default useRestaurantDetail;