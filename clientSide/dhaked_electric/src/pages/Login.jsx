import React from "react";

const Login = () => {
  return (
    <div>
      <div className="h-screen pt-20 bg-blue-500 ">
        <form
          action=""
          className=" w-max p-5 m-auto shadow-form bg-gray-300 rounded-2xl"
        >
          <h3 className="text-xl text-green-700 italic mb-4 font-bold">
            Login Form
          </h3>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="border"
          />{" "}
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="border"
          />
          <br />
          <br />
          <input
            type="submit"
            name=""
            id="submit"
            className="italic text-white bg-gray-900 py-1 px-5 rounded-lg ml-[25%]"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
