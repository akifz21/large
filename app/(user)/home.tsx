"use client";
import Logo from "../_components/common/Logo";
import BlogCard from "../_components/blog/BlogCard";
import SearchBar from "../_components/home/SearchBar";
import { Blog } from "../types";

export default function Home({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="flex flex-col gap-12 justify-center items-center">
      <div className="text-center gap-4 flex flex-col items-center">
        <Logo className="text-5xl" />
        <p className="opacity-75 font-medium">
          a blog about software development
        </p>
      </div>
      <SearchBar />
      <div className="grid items-center justify-center grid-cols-12 lg:grid-cols-12 gap-12">
        {blogs.map((blog: Blog, index: any) => (
          <div key={index} className="lg:col-span-4 md:col-span-6 col-span-12">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="flex flex-row items-center justify-center border rounded-md shadow-lg  w-1/2 gap-4 mt-20">
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
