import { formatDateForShow } from "@/app/_lib/utils";
import { Comment } from "@/app/types";
import React from "react";

const CommentCard = ({ comment }: { comment: Comment }) => {
  return (
    <div className="flex mt-4 flex-col w-full md:w-1/2">
      <div className="flex flex-row justify-between">
        <h3 className="font-bold text-xl">
          {comment?.user?.first_name + " " + comment?.user?.last_name}
        </h3>
        <span className="font-semibold opacity-40">
          {formatDateForShow(comment?.createdAt, true)}
        </span>
      </div>
      <p className="border-t">{comment?.content}</p>
    </div>
  );
};

export default CommentCard;
