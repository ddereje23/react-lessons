import { useRouteError } from "react-router-dom";
import oops from "../assets/oops.webp";
const RouteError = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="container">
      <div className="error-route">
        <img src={oops} />
        <div>
          <h2>something went wrong !!!</h2>
        </div>
      </div>
      <h1>
        <span className="error-code">{status}</span> - {statusText}
      </h1>
    </div>
  );
};

export default RouteError;
