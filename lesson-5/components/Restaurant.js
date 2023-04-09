import { IMAGE_CDN_URL } from "../constants";
const Restaurant = ({ cloudinaryImageId, name, cuisines, lastMileTravel }) => {
  return (
    <div className="restaurant">
      <img src={IMAGE_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{lastMileTravel.toFixed(2)}: Miles</h5>
    </div>
  );
};

export default Restaurant;
