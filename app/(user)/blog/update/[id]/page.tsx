import { baseURL } from "@/app/_api/axiosInstance";
import { useSearchParams } from "next/navigation";
import React from "react";
import UpdateBlog from "./updateBlog";

const getBlog = async (id: string) => {
  const res = await fetch(`${baseURL}/blogs/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const Page = async ({ params }: { params: { id: string } }) => {
  const responseData = await getBlog(params.id);
  console.log(responseData.data);

  return (
    <>
      <UpdateBlog blog={responseData.data} />
    </>
  );
};

export default Page;
