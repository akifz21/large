import BlogCard from "@/app/_components/home/BlogCard";
import SearchBar from "@/app/_components/home/SearchBar";
import { Blog, User, UserDetails } from "@/app/types";
import React from "react";

const UserBlogs = ({ user }: { user: UserDetails }) => {
  const blogs = user?.blogs;
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">
          {user?.first_name + " " + user?.last_name}
        </h1>
        <div className="flex flex-row gap-4 justify-between items-center">
          <p className="font-semibold text-lg">
            Followers :{user?.followedBy.length}{" "}
          </p>
          <p className="font-semibold text-lg">
            Following :{user?.following?.length}{" "}
          </p>
        </div>
        <p className="font-semibold text-lg opacity-50">blogs</p>
      </div>
      <SearchBar />
      <div className="grid items-center justify-center grid-cols-12 lg:grid-cols-12 gap-6">
        {blogs.map((blog: Blog, index: any) => (
          <div key={index} className="lg:col-span-4 md:col-span-6 col-span-12">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBlogs;
