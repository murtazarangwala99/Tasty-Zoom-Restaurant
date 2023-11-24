import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
const RouteError = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <div className="error-div">
        <h2>
          {error.status} : {error.statusText}
        </h2>
        <h3>{error.data}</h3>
        <h3>Click here 👇 to Go back to home Page </h3>
        <Link to="/">
          <button className="btn">Home Page</button>
        </Link>
      </div>
    </>
  );
};
export default RouteError;
