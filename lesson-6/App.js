import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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

root.render(<AppLayout id="app" />);
