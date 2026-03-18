import React from "react";

const Singup = () => {
  return (
    <div className="h-screen pt-20 bg-amber-600">
      <form
        action=""
        className="w-max py-8 px-7    m-auto rounded-xl bg-gray-300 shadow-form"
      >
        <h3 className="text-2xl text-green-900  italic font-bold mb-3">
          Register Form
        </h3>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Enter Name"
          className="border rounded-md"
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="border rounded-md"
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="border rounded-md"
        />
        <br />
        <br />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter phone"
          className="border rounded-md"
        />
        <br />
        <br />
        <input
          type="submit"
          name=""
          id=""
          className="border px-3 p-1 bg-gray-900 text-white rounded-md italic ml-[25%]"
        />
      </form>
    </div>
  );
};

export default Singup;
