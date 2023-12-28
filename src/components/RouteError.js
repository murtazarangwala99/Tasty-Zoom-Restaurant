import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError();
  // console.log(error);
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center my-40">
        <h2 className="text-red-600 font-extrabold text-3xl">
          {error.status} : {error.statusText}
        </h2>
        <h3 className="text-red-600 font-bold text-xl">{error.data}</h3>
        <h3 className="font-bold text-xl">Click here 👇 to Go back to home Page </h3>
        <Link to="/">
          <button className="hover:underline rounded-lg font-bold px-4 py-2 bg-blue-500 text-white">
            Home Page
          </button>
        </Link>
      </div>
    </>
  );
};
export default RouteError;
