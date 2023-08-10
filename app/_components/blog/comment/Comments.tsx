"use client";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import { getBlogComments } from "@/app/_api/comment";
import { useCallback, useEffect, useState } from "react";
import { Comment } from "@/app/types";

const Comments = ({ blogId }: { blogId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = useCallback(async () => {
    try {
      const res = await getBlogComments(blogId);
      setComments(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  }, [blogId]);

  useEffect(() => {
    getComments();
  }, [getBlogComments]);

  return (
    <div className="flex flex-col gap-4 ">
      <h2 className="text-2xl font-bold">Comments</h2>
      <CommentForm getComments={getComments} blogId={blogId} />
      {comments?.map((comment) => (
        <div key={comment?.id}>
          <CommentCard getComments={getComments} comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
