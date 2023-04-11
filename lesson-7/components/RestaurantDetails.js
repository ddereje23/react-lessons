import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGE_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
const RestaurantDetails = () => {
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
    const data = json?.data?.cards[0]?.card?.card?.info;
    console.log(data);
    setRestaurantDetail(data);
  }
  return !restaurantDetail ? (
    <Shimmer />
  ) : (
    <div className="restaurant-details">
      <h2>
        Restaurant Name: <span>{restaurantDetail.name}</span>
      </h2>
      <div>
        <img
          className="restaurant"
          src={IMAGE_CDN_URL + restaurantDetail?.cloudinaryImageId}
        />
        <h3>Restaurant City: {restaurantDetail.city}</h3>
        <h3>Average Rating: {restaurantDetail.avgRating}</h3>
        {restaurantDetail.cusines ? (
          <h3>Cusines: {restaurantDetail.cusines.join(" ,")}</h3>
        ) : null}
        <h3>Cost For Two: {restaurantDetail.costForTwoMessage}</h3>
        {restaurantDetail.isOpen ? (
          <h3>Is Open: True</h3>
        ) : (
          <h3>Is Open: False</h3>
        )}
      </div>
    </div>
  );
};

export default RestaurantDetails;
