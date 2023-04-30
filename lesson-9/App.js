import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RouteError from "./components/RouteError";
import RestaurantDetails from "./components/RestaurantDetails";
//async loading, ondemand loading, dynamic loading/import, code-spliting, chunking
import {lazy, Suspense} from 'react';

const About = lazy(() => import("./components/About"))

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
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: 
          <Suspense fallback = {<div>Loading ...</div>}>
            <About />
          </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
