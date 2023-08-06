"use client";
import CommentForm from "./CommentForm";
import CommentCard from "./CommentCard";
import { getBlogComments } from "@/app/_api/comment";
import { useCallback, useEffect, useState } from "react";
import { Comment } from "@/app/types";

const Comments = ({ blogId }: { blogId: string }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

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
    <div>
      <h2 className="text-2xl font-bold">Comments</h2>
      <CommentForm getComments={getComments} blogId={blogId} />
      {comments?.map((comment) => (
        <div key={comment?.id}>
          <CommentCard comment={comment} />
        </div>
      ))}
    </div>
  );
};

export default Comments;
