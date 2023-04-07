import React from "react";
import ReactDOM from "react-dom/client";
import user from "./user.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

/***
 * <div class='title'>
 *    <h1>heading-1</h1>
 *    <h2>heading-1</h2>
 *    <h3>heading-1</h3>
 * </div>
 */

// building the structure using React.createElement.
let container = React.createElement(
  "div",
  {
    className: "title",
  },
  [
    React.createElement(
      "h1",
      {
        key: "h1",
        style: { textAlign: "left", color: "black" },
      },
      "Heading 1"
    ),
    React.createElement(
      "h2",
      {
        key: "h2",
        style: { textAlign: "center", color: "blue" },
      },
      "Heading-2"
    ),
    React.createElement(
      "h3",
      {
        key: "h3",
        style: { textAlign: "right", color: "green" },
      },
      "Heading-3"
    ),
  ]
);

// building the structure using JSX.
container = (
  <div className="title">
    <h1>Heading-1</h1>
    <h2>Heading-2</h2>
    <h3>Heading-3</h3>
  </div>
);

// building the structure using functional component.
let Container = ({ id }) => (
  <div className="title" id={id}>
    <h1>Heading-1</h1>
    <h2>Heading-2</h2>
    <h3>Heading-3</h3>
  </div>
);

// component composition
let Heading4 = () => <h4>Heading-4</h4>;
let Container2 = ({ id }) => (
  <div className="title" id={id}>
    <h1>Heading-1</h1>
    <h2>Heading-2</h2>
    <h3>Heading-3</h3>
    <Heading4 />
  </div>
);

// header functional component
let Header = () => {
  return (
    <div className="header">
      <a href="#">Kontakt</a>
      <input type="text" />
      <img src={user} />
    </div>
  );
};

// root.render(container);
// root.render(<Container id="container" />);
// root.render(<Container2 id="container" />);
root.render(<Header id="container" />);
