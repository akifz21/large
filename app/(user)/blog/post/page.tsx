"use client";
import SectionModal from "@/app/_components/blog/SectionModal";
import { useState } from "react";
import { FormikValues, useFormik } from "formik";
import { useUser } from "@/app/_stores/user/hooks";
import SectionDropdown from "@/app/_components/blog/SectionDropdown";
import { toast } from "react-toastify";
import { User } from "@/app/types";
import FileInput from "@/app/_components/blog/FileInput";
import Image from "next/image";
import { uploadImage } from "@/app/_api/upload";
import { useRouter } from "next/navigation";
import { addBlog } from "@/app/_api/blog";

export default function Page() {
  const [sections, setSections] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const user: User = useUser();
  const router = useRouter();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setFile(file);
    setFileUrl(url);
  };

  const removeImage = () => {
    setFile("");
    setFileUrl("");
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      sections: [],
      image: "",
      published: true,
      authorId: (user && user.id) || "",
      tags: [],
    },
    onSubmit: async (values: FormikValues) => {
      values.sections = sections;
      console.log(sections);
      const formData = new FormData();
      formData.append("image", file);

      try {
        const data = await uploadImage(formData);
        values.image = data.url;

        await addBlog(values);
        toast.success(`Blog added successfully`);
        router.push(`/`);
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDelete = (elementToDelete: any) => {
    const filteredArray = sections.filter((item) => item !== elementToDelete);
    setSections(filteredArray);
  };

  return (
    <div className="flex flex-col min-h-[110vh] gap-4">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full items-center justify-center gap-4"
      >
        <div className="flex flex-col text-center gap-4">
          <input
            type="text"
            onChange={formik.handleChange}
            name="title"
            value={formik.values.title}
            autoComplete="false"
            className="custom-input p-0 font-extrabold  text-center text-5xl  border-none shadow-none focus:outline-none focus:ring-0"
            placeholder="Main Title"
          />
          <div>
            <p className="opacity-75">30 November 2021</p>
          </div>
          <h1 className="text-4xl font-extrabold">. . .</h1>
        </div>
        {!file ? (
          <FileInput onChange={handleImageChange} name={"image"} />
        ) : (
          <>
            <div className="w-full relative  h-[400px]">
              <Image
                src={fileUrl}
                alt="blog image"
                className="rounded-lg"
                objectFit="cover"
                fill
              />
            </div>
            <button
              type="button"
              onClick={() => removeImage()}
              className="custom-button w-fit text-white dark:bg-red-900 bg-red-600"
            >
              Remove
            </button>
          </>
        )}
        <div className="flex flex-col gap-4 w-full">
          {sections.map((section: any, index) => (
            <div
              key={index}
              className="self-start flex justify-between items-center flex-row w-full"
            >
              {section.type !== "IMAGE" ? (
                <div>
                  <h3 className="font-semibold text-3xl">{section?.title}</h3>
                  <div className="w-full content">{section?.content}</div>
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
              <div className="">
                <button
                  type="button"
                  onClick={() => handleDelete(section)}
                  className="custom-button w-fit text-white dark:bg-red-900 bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <SectionDropdown setType={setType} setIsOpen={setIsOpen} />
        </div>
        <button
          type="submit"
          className=" custom-button bg-green-600 dark:bg-green-800 text-white"
        >
          Post
        </button>
      </form>

      <SectionModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        sections={sections}
        setSections={setSections}
        type={type}
      />
    </div>
  );
}
