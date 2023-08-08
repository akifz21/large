"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import { createUser } from "@/app/_api/user";
import Link from "next/link";

const Signup = () => {
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
      const response: any = await createUser(formData);
      if (response.status === 200) {
        toast.success("Register successfully");
        router.push("/");
      } else {
        console.log(response);
        toast.error(response.response.data.message);
      }
    } catch (error: any) {
      toast.error("err");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-1 w-2/3">
      <Link
        className="absolute bg-black text-sm text-white rounded-md right-7 top-7 font-light border shadow-lg px-4 py-2"
        href={"/login"}
      >
        Login
      </Link>
      <h2 className="text-2xl font-medium text-center tracking-wide">
        Create an account
      </h2>
      <p className="font-light opacity-50 text-center tracking-wide">
        Enter your credentials below to create your account
      </p>

      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="flex  rounded-md  p-4  gap-4 w-full  flex-col"
          action=""
        >
          <input
            type="text"
            name="first_name"
            className="custom-input"
            placeholder="First name"
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="text"
            name="last_name"
            className="custom-input"
            placeholder="Last name"
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="email"
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
            className="bg-[#18181B] w-full text-white py-2 text-sm font-light rounded tracking-wide"
            type="submit"
          >
            Create
          </button>

          <div className="border-b border-gray-400 relative text-center my-3">
            <span className="bg-white px-2 text-gray-400 text-sm  absolute -translate-x-1/2 -translate-y-1/2 tracking-wider">
              OR CONTINUE WITH
            </span>
          </div>

          <button
            className="bg-white w-full text-black shadow-xl border py-2 text-sm font-light rounded flex gap-1 items-center justify-center tracking-wider"
            type="button"
          >
            <AiFillGithub className="text-xl" /> Github
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
