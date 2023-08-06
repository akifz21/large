import CommentCard from "@/app/_components/blog/comment/CommentCard";
import CommentForm from "@/app/_components/blog/comment/CommentForm";
import Comments from "@/app/_components/blog/comment/Comments";
import { formatDateForShow } from "@/app/_lib/utils";
import { Blog } from "@/app/types";
import Image from "next/image";
import React from "react";

const Blog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-5xl font-extrabold">{blog?.title}</h1>
        <div>
          <p className="opacity-75  text-lg">
            {blog?.author?.first_name + " " + blog?.author?.last_name}
          </p>
          <p className="opacity-75">{formatDateForShow(blog?.createdAt)}</p>
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
