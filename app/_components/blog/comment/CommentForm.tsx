"use client";
import { addComment } from "@/app/_api/comment";
import { useUser } from "@/app/_stores/user/hooks";
import { useFormik } from "formik";
import React from "react";
import { BsSend } from "react-icons/bs";
import { toast } from "react-toastify";

const CommentForm = ({
  blogId,
  getComments,
}: {
  blogId: string;
  getComments: any;
}) => {
  const user = useUser();

  const formik = useFormik({
    initialValues: {
      blogId: blogId || "",
      userId: user?.id || "",
      content: "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const res = await addComment(values);
        toast.success(res?.data?.message);
        getComments();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-row gap-2">
      <textarea
        value={formik.values.content}
        placeholder="Add a comment..."
        name="content"
        className="custom-input w-1/2 py-4 resize-none"
        onChange={formik.handleChange}
      />
      <button
        type="submit"
        className="custom-button gap-4 text-lg flex flex-row items-center justify-center"
      >
        Submit <BsSend />
      </button>
    </form>
  );
};

export default CommentForm;
