import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await api.post("/auth/login", formData);
    if (data?.data?.msg == "Login successfully") {
      alert(data?.data?.msg);
      navigate("/product");
    } else {
      alert("Failled Login");
    }

    console.log(data);
    setFormData({ email: "", password: "" });
  };
  return (
    <div>
      <div className="h-screen pt-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <form
          action=""
          className=" w-max p-5 m-auto shadow-form bg-gray-300 rounded-2xl"
          onSubmit={handleSubmit}
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
            value={formData.email}
            onChange={handleForm}
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="border"
            value={formData.password}
            onChange={handleForm}
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
