import { useRouteError } from "react-router-dom";
const RouteError = () => {
  console.log(useRouteError());
  return (
    <div className="error-route">
      <h1>Oops something went wrong !!!</h1>
    </div>
  );
};

export default RouteError;
