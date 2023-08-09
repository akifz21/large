"use client";
import { deleteComment } from "@/app/_api/comment";
import { formatDateForShow } from "@/app/_lib/utils";
import { useUser } from "@/app/_stores/user/hooks";
import { Comment } from "@/app/types";
import React from "react";
import toast from "react-hot-toast";
import { FaRegTrashCan } from "react-icons/fa6";

const CommentCard = ({
  comment,
  getComments,
}: {
  comment: Comment;
  getComments: any;
}) => {
  const user = useUser();

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

  return (
    <div className="flex mt-4 flex-col w-full md:w-1/2">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl">
          {comment?.user?.first_name + " " + comment?.user?.last_name}
        </h3>
        <div className="flex flex-row gap-2 items-center">
          <span className="font-semibold opacity-40">
            {formatDateForShow(comment?.createdAt, true)}
          </span>
          {user?.id === comment?.userId && (
            <button onClick={handleToast} type="button">
              <FaRegTrashCan size={20} />
            </button>
          )}
        </div>
      </div>
      <p className="border-t">{comment?.content}</p>
    </div>
  );
};

export default CommentCard;
