import React, { useState } from "react";
import api from "../api/axios";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Singup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("set form", formData);
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const data = await api.post("/auth/register", formData);
    console.log(data?.data);
    alert(data?.data?.msg);
    setFormData({
      username: "",
      email: "",
      password: "",
      phone: "",
    });
  };
  useGSAP(() => {
    gsap.from(".rform", {
      y: 50,
      opacity: 0,
      duration: 2,
    });
  }, []);
  return (
    <div className="h-screen pt-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ">
      <form
        action=""
        className="w-max py-8 px-7    m-auto rounded-xl bg-gray-300 shadow-form rform"
        onSubmit={submitForm}
      >
        <h3 className="text-2xl text-green-900  italic font-bold mb-3">
          Register Form
        </h3>
        <input
          type="text"
          name="username"
          id="user"
          placeholder="Enter Name"
          className="border rounded-md"
          value={formData.username}
          onChange={handleForm}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Email"
          className="border rounded-md"
          value={formData.email}
          onChange={handleForm}
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Password"
          className="border rounded-md"
          value={formData.password}
          onChange={handleForm}
        />
        <br />
        <br />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Enter phone"
          className="border rounded-md"
          value={formData.phone}
          onChange={handleForm}
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
