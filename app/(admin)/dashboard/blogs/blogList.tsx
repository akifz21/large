"use client";
import { deleteBlog } from "@/app/_api/blog";
import Table from "@/app/_components/dashboard/Table";
import { formatDateForShow } from "@/app/_lib/utils";
import { Blog } from "@/app/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  const router = useRouter();
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteBlog(id);
      toast.success(res?.data?.message);
      router.refresh();
    } catch (error) {}
  };

  return (
    <>
      <Table
        searchable
        head={[
          { name: "Title" },
          { name: "Author" },
          { name: "Created at" },
          { name: "Delete" },
        ]}
        body={blogs.map((blog) => [
          blog?.title,
          blog?.author?.first_name + " " + blog?.author?.last_name,
          formatDateForShow(blog?.createdAt.toString(), true),
          <button
            onClick={() => handleDelete(blog?.id)}
            className="custom-button bg-red-500 text-white"
          >
            Delete
          </button>,
        ])}
      />
    </>
  );
};

export default BlogList;
