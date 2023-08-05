import Home from "./_home";
import { Blog } from "../types";

async function getBlogs() {
  const res = await fetch("http://localhost:4000/api/blogs", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const data = await getBlogs();
  const blogs: Blog[] = data.data;
  return <Home blogs={blogs} />;
}
