"use client";
import { authLogin } from "@/app/_api/auth";
import { login } from "@/app/_stores/user/actions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await authLogin(formData);
      console.log(response);
      login(response.data.data.access_token);
      router.push("/");
      toast.success("Login successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const loginViaGithub = async () => {
    window.open("http://localhost:4000/api/auth/github", "_self");
  };

  return (
    <div className="flex flex-col justify-center gap-2 w-2/3">
      <Link
        className="absolute bg-black text-sm text-white rounded-md right-7 top-7 font-light border shadow-lg px-4 py-2"
        href={"/signup"}
      >
        Sign Up
      </Link>

      <div className="flex flex-col w-full">
        <form
          onSubmit={handleSubmit}
          className="flex  rounded-md  p-4  gap-4 w-full  flex-col"
          action=""
        >
          <input
            type="text"
            name="email"
            className="custom-input"
            placeholder="Email"
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="password"
            name="password"
            className="custom-input"
            placeholder=" Password"
            onChange={handleChange}
            autoComplete="off"
          />
          <button
            className="bg-[#18181B] w-full text-white py-2 text-sm font-light rounded tracking-wider"
            type="submit"
          >
            Login
          </button>

          <div className="border-b border-gray-400 relative text-center my-3">
            <span className="bg-white px-2 text-gray-400 text-sm  absolute -translate-x-1/2 -translate-y-1/2 tracking-wider">
              OR CONTINUE WITH
            </span>
          </div>

          <button
            className="bg-white w-full text-black shadow-xl border py-2 text-sm font-light rounded flex gap-1 items-center justify-center tracking-wider"
            onClick={() => loginViaGithub()}
            type="button"
          >
            <AiFillGithub className="text-xl" /> Github
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
