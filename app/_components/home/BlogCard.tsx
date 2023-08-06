import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/app/types";
import { formatDateForShow } from "@/app/_lib/utils";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex flex-col w-full p-8">
      <Link className="flex flex-col gap-4" href={`blog/${blog?.id}`}>
        <Image
          src={blog?.image}
          width={400}
          height={400}
          className="rounded-md hover:scale-105 transform transition-transform"
          alt="blog-banner"
        />
        <div className="flex flex-col">
          <h2
            className="text-base
         md:text-lg font-bold
         line-clamp-1
        "
          >
            {blog?.title}
          </h2>
          <div className="flex flex-row gap-4">
            {blog?.tags?.map((tag) => (
              <span className="badge w-fit">{tag}</span>
            ))}
          </div>
          <span className="opacity-70">
            {formatDateForShow(blog?.createdAt)}
          </span>
          {/* <p className="line-clamp-2 font-light">
            {blog.}
          </p> */}
          <div className="mt-2">
            <p className="font-bold">
              {blog?.author?.first_name + " " + blog?.author?.last_name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
