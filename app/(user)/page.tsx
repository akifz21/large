import Home from "./home";
import { Blog } from "../types";
import { baseURL } from "../_api/axiosInstance";

async function getBlogs() {
  const res = await fetch(`${baseURL}/blogs`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const data = await getBlogs();
  const blogs: Blog[] = data.data;
  return <Home blogs={blogs} />;
}
