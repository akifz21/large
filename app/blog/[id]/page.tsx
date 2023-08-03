import Image from "next/image";
import image from "@/public/2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.avif";
import { toast } from "react-toastify";
import { Blog } from "@/app/types";

async function getBlog(id: string) {
  try {
    const res = await fetch(`http://localhost:4000/api/blogs/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const res = await getBlog(params.id);
  const blog: Blog = res.data;
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-5xl font-extrabold">{blog.title}</h1>
        <div>
          <p className="opacity-75  text-lg">Mehmet Akif Özdemir</p>
          <p className="opacity-75">{blog.createdAt}</p>
        </div>
      </div>
      <h1 className="text-4xl font-extrabold">. . .</h1>
      <div className="w-full relative  h-[400px]">
        <Image
          src={image}
          alt="blog image"
          className="rounded-lg"
          objectFit="cover"
          fill
        />
      </div>
      <div className="flex mt-4 flex-col gap-4 w-full">
        {blog.sections.map((section: any, index) => (
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
      </div>
    </div>
  );
}
