"use client";
import { deleteComment, updateComment } from "@/app/_api/comment";
import { formatDateForShow } from "@/app/_lib/utils";
import { useUser } from "@/app/_stores/user/hooks";
import { Comment, CommentRequest } from "@/app/types";
import { useFormik } from "formik";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";

const CommentCard = ({
  comment,
  getComments,
}: {
  comment: Comment;
  getComments: any;
}) => {
  const user = useUser();
  const [isEdit, setIsEdit] = useState(false);
  const [commentToEdit, setCommentToEdit] = useState<Comment>();

  const formik = useFormik({
    initialValues: {
      content: (commentToEdit && commentToEdit.content) || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      const id = commentToEdit?.id;

      try {
        const res = await updateComment(id, values);
        if (res.status === 200) {
          toast.success(res?.data?.message);
          getComments();
        }
        setIsEdit(!isEdit);
      } catch (error) {
        setIsEdit(!isEdit);
        console.log(error);
      }
    },
  });

  const handleDelete = async (id: string) => {
    await toast.promise(deleteComment(id), {
      loading: "Deleting...",
      success: (res) => <b>{res?.data?.message}</b>,
      error: <b>Someting went wrong.</b>,
    });
    getComments();
  };

  const handleToast = () => {
    toast((t) => (
      <span className="flex flex-col gap-2">
        <b>Are you sure</b>The comment will be deleted ?
        <div className="flex flex-row gap-2">
          <button
            onClick={() => toast.dismiss(t?.id)}
            className="custom-button bg-black text-white"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleDelete(comment?.id);
              toast.dismiss(t?.id);
            }}
            className="custom-button"
          >
            Delete
          </button>
        </div>
      </span>
    ));
  };

  const handleEdit = (comment: Comment) => {
    setIsEdit(!isEdit);
    setCommentToEdit(comment);
  };

  return (
    <div className="flex mt-4 gap-2 flex-col w-full">
      <div className="flex flex-row  justify-between">
        <h3 className="font-bold text-xl">
          {comment?.user?.first_name + " " + comment?.user?.last_name}
        </h3>
        <div className="flex flex-row gap-2 items-center">
          <span className="font-semibold opacity-40">
            {formatDateForShow(comment?.createdAt, true)}
          </span>
          {user?.id === comment?.userId && (
            <div className="flex flex-row gap-3 items-center">
              <button onClick={handleToast} type="button">
                <FaRegTrashCan size={20} />
              </button>
              <button onClick={() => handleEdit(comment)}>
                <FiEdit size={20} />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-separate py-2 border-gray-400 border-opacity-50 ">
        {!isEdit ? (
          <p>{comment?.content}</p>
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-row w-full gap-4"
          >
            <input
              type="text"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
              className="custom-input w-full"
            />
            <button type="submit" className="custom-button">
              Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
