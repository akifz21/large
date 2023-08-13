import { baseURL } from "@/app/_api/axiosInstance";
import React from "react";
import BlogList from "./blogList";

async function getBlogs() {
  const res = await fetch(`${baseURL}/blogs`, { cache: "no-store" });
  return res.json();
}

const Page = async () => {
  const response = await getBlogs();
  const blogs = response?.data;
  return <BlogList blogs={blogs} />;
};

export default Page;
