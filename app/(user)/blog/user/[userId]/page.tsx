import { baseURL } from "@/app/_api/axiosInstance";
import BlogCard from "@/app/_components/home/BlogCard";
import SearchBar from "@/app/_components/home/SearchBar";
import { Blog } from "@/app/types";
import UserBlogs from "./userBlogs";

async function getBlogs(userId: string) {
  const res = await fetch(`${baseURL}/blogs/author/${userId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Page = async ({ params }: { params: { userId: string } }) => {
  const res = await getBlogs(params.userId);
  const blogs: Blog[] = res?.data;
  return (
    <>
      <UserBlogs blogs={blogs} />
    </>
  );
};

export default Page;
