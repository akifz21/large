"use client";
import { useRef } from "react";
import BlogCard from "./_components/home/BlogCard";
import SearchBar from "./_components/home/SearchBar";
import { useInView, motion } from "framer-motion";

export default function Home() {
  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis.",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis.",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis.",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet.",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, corporis.",
    },
  ];

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-black">B-LOG</h1>
        <p className="opacity-75 font-medium">
          a blog about software development
        </p>
      </div>
      <SearchBar />
      <div className="grid items-center justify-center grid-cols-6 lg:grid-cols-12 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`col-span-6 ${
              index !== 0 && index !== 1 && "lg:col-span-4"
            }`}
          >
            <BlogCard />
          </div>
        ))}

        {/* <div className="col-span-6  "><BlogCard /></div>
                <div className="col-span-6  "><BlogCard /></div>

                <div className="col-span-6 lg:col-span-4  "><BlogCard /></div>
                <div className="lg:col-span-4  col-span-6 "><BlogCard /></div>

                <div className="lg:col-span-4 col-span-6 "><BlogCard /></div>
                <div className="lg:col-span-4 col-span-6"><BlogCard /></div> */}
      </div>
      <div className="flex flex-row items-center justify-center border rounded-md shadow-lg  w-1/2 gap-4">
        <div className="flex flex-col gap-2 p-10 items-center">
          <h4 className="text-2xl font-bold">Subscribe To Our Newsletter</h4>
          <p className="w-full opacity-75">
            Get weekly software news, articles, and videos delivered to your
            inbox.
          </p>
          <div className="flex flex-col  w-full gap-4">
            <input
              type="text"
              className="custom-input"
              placeholder=" Email"
              autoComplete="off"
            />
            <button className="custom-button self-start">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
