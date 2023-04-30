import { IMAGE_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantDetail from "../hooks/useRestaurantDetail";
const RestaurantDetails = () => {
  const restaurantDetail = useRestaurantDetail();
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
