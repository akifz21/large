"use client";
import { deleteBlog } from "@/app/_api/blog";
import Like from "@/app/_components/blog/Like";
import Comments from "@/app/_components/blog/comment/Comments";
import DeleteModal from "@/app/_components/common/DeleteModal";
import { formatDateForShow } from "@/app/_lib/utils";
import { useUser } from "@/app/_stores/user/hooks";
import { Blog } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsTags } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

const Blog = ({ blog }: { blog: Blog }) => {
  const user = useUser();

  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col  text-center gap-6">
        <h1 className="text-5xl font-extrabold">{blog?.title} </h1>

        <div>
          <p className="opacity-75  text-lg">
            {blog?.author?.first_name + " " + blog?.author?.last_name}
          </p>
          <p className="opacity-75">{formatDateForShow(blog?.createdAt)}</p>
        </div>

        <div className="flex items-center justify-center flex-row gap-4">
          <BsTags size={20} />
          {blog?.tags?.map((tag) => (
            <span className="badge">{tag}</span>
          ))}
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <Like blog={blog} />
          {user?.id === blog?.authorId && (
            <div className="flex flex-row items-center gap-4  justify-center">
              <DeleteModal id={blog?.id} />
              <button className="custom-button">
                <FiEdit size={25} />
              </button>
            </div>
          )}
        </div>
      </div>

      <h1 className="text-4xl font-extrabold">. . .</h1>
      <div className="w-full relative  h-[400px]">
        <Image
          src={blog?.image}
          alt="blog image"
          className="rounded-lg"
          objectFit="cover"
          fill
        />
      </div>
      <div className="flex mt-4 flex-col gap-4 w-full">
        {blog?.sections?.map((section: any, index) => (
          <div
            key={index}
            className="self-start flex justify-between items-center flex-row w-full"
          >
            {section.type !== "IMAGE" ? (
              <div>
                <h3 className="font-semibold text-3xl">{section?.title}</h3>
                <p className="leading-relaxed text-lg">{section?.content}</p>
              </div>
            ) : (
              <div className="w-full relative  h-[400px]">
                <Image
                  src={section?.image}
                  alt="blog image"
                  className="rounded-lg"
                  fill
                  objectFit="contain"
                />
              </div>
            )}
          </div>
        ))}
        <div className="flex mt-10 gap-5 flex-col">
          <Comments blogId={blog?.id} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
