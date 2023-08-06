"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useFormik } from "formik";
import FileInput from "./FileInput";
import { uploadImage } from "@/app/_api/upload";
import Image from "next/image";

const SectionModal = ({
  sections,
  setSections,
  type,
  isOpen,
  setIsOpen,
}: {
  sections: any;
  setSections: any;
  type: any;
  isOpen: any;
  setIsOpen: any;
}) => {
  const [sectionFile, setSectionFile] = useState(null);
  const [secitonFileUrl, setSectionFileUrl] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setSectionFile(file);
    setSectionFileUrl(url);
  };

  const removeSectionImage = () => {
    setSectionFile(null);
    setSectionFileUrl("");
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      image: "",
      type: type ? type : "",
    },
    enableReinitialize: true,
    onSubmit: async (values: any) => {
      if (sectionFile) {
        const formData = new FormData();
        formData.append("image", sectionFile);
        try {
          const data = await uploadImage(formData);
          values.image = data.url;
        } catch (error) {
          console.log(error);
        }
      }
      setSections([...sections, values]);
      setIsOpen(false);
      removeSectionImage();
      formik.resetForm();
    },
  });

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="z-50"
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0  overflow-y-auto">
            <div className="flex min-h-screen items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl z-50  overflow-hidden rounded-2xl bg-light-color dark:bg-dark-color p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col">
                    <form
                      onSubmit={formik.handleSubmit}
                      className="flex  rounded-md md:p-10 p-4  gap-4 w-full bg flex-col"
                    >
                      {type === "TITLE_TEXT" && (
                        <input
                          type="text"
                          name="title"
                          className="custom-input"
                          placeholder="Sub title  "
                          onChange={formik.handleChange}
                          autoComplete="off"
                        />
                      )}
                      {(type === "TITLE_TEXT" ||
                        type === "TEXT" ||
                        type === "CODE") && (
                        <textarea
                          rows={5}
                          onChange={formik.handleChange}
                          name="content"
                          className="custom-input w-full"
                          placeholder="Content"
                        />
                      )}
                      {type === "IMAGE" &&
                        (!sectionFile ? (
                          <FileInput
                            onChange={handleImageChange}
                            name={"sectionImage"}
                          />
                        ) : (
                          <>
                            <div className="w-full relative  h-[400px]">
                              <Image
                                src={secitonFileUrl}
                                alt="blog image"
                                className="rounded-lg"
                                objectFit="cover"
                                fill
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => removeSectionImage()}
                              className="custom-button w-fit text-white dark:bg-red-900 bg-red-600"
                            >
                              Remove
                            </button>
                          </>
                        ))}
                      <button
                        className="custom-button z-50"
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        type="submit"
                      >
                        Add
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SectionModal;
