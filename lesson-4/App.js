import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*** App Layout
 * Header
 *    Logo(left)
 *    nav-items (right)
 * Body
 *    Search
 *    RestaurantList
 *        Restaurant
 *            Img
 *            Name
 *            Cusine
 *            Price
 * Footer
 */

// App Layout
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

// Header
const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img src={logo} />
      </a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const restaurants = [
  {
    ImageUrl:
      "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    Name: "Apple",
    Type: "fruit",
    Price: 100,
  },
  {
    ImageUrl:
      "https://www.collinsdictionary.com/images/thumb/pizza_337771808_250.jpg",
    Name: "pizza",
    Type: "italian",
    Price: 370,
  },
  {
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eJrVm2fZf9kQBz5X4WgvPVRLDjB8lFAEIg&usqp=CAU",
    Name: "Burger",
    Type: "Mac&Cheese",
    Price: 310,
  },
  {
    ImageUrl:
      "https://www.collinsdictionary.com/images/thumb/salad_134301953_250.jpg?version=4.0.306",
    Name: "salad",
    Type: "Veg",
    Price: 50,
  },
  {
    ImageUrl:
      "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
    Name: "Apple",
    Type: "fruit",
    Price: 100,
  },
  {
    ImageUrl:
      "https://www.collinsdictionary.com/images/thumb/pizza_337771808_250.jpg",
    Name: "pizza",
    Type: "italian",
    Price: 370,
  },
  {
    ImageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4eJrVm2fZf9kQBz5X4WgvPVRLDjB8lFAEIg&usqp=CAU",
    Name: "Burger",
    Type: "Mac&Cheese",
    Price: 310,
  },
  {
    ImageUrl:
      "https://www.collinsdictionary.com/images/thumb/salad_134301953_250.jpg?version=4.0.306",
    Name: "salad",
    Type: "Veg",
    Price: 50,
  },
];

// Restaurant
const Restaurant = ({ restaurant }) => {
  const { Name, Type, Price, ImageUrl } = { ...restaurant };
  return (
    <div className="restarant">
      <img src={ImageUrl} />
      <h3>{Name}</h3>
      <h4>{Type}</h4>
      <h5>{Price}</h5>
    </div>
  );
};

// RestaturantList
const RestaturantList = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <Restaurant
          restaurant={restaurant}
          key={Math.floor(Math.random() * 10 * 100)}
        />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <>
      <RestaturantList restaurants={restaurants} />
    </>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

root.render(<AppLayout id="app" />);
