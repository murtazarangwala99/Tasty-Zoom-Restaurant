import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center my-6">
        <h2 className="font-bold text-3xl">Login</h2>
        <form
          className="border-2 m-2 p-6 rounded-md flex flex-col gap-4"
          onSubmit={(e) => e.preventDefault()}>
          <div className="flex justify-between gap-10">
            <label for="email" className="font-semibold text-center text-lg">
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="border-2 border-black  rounded-md pl-2 py-1"
            />
          </div>
          <div className="flex justify-between">
            <label for="password" className="font-semibold text-center text-lg ">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 border-black rounded-md pl-2 py-1"
            />
            
          </div>
          <button
            type="submit"
            className="border py-1 rounded-md bg-blue-400 hover:underline text-white hover:bg-blue-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
