"use client";
import BlogCard from "./components/BlogCard";
import SearchBar from "./components/SearchBar";
import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

export default function Home() {

  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl font-black">
          B-LOG
        </h1>
        <p className="opacity-75 font-medium">a blog about software development</p>
      </div>
      <SearchBar />
      <div className="flex flex-row w-full justify-between gap-10">
        <BsFillArrowLeftSquareFill className="self-center" size={40} />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BsFillArrowRightSquareFill className="self-center" size={40} />
      </div>

    </div>
  );
}
