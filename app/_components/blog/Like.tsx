"use client";
import { getBlogLikes, like, unlike } from "@/app/_api/like";
import { useUser } from "@/app/_stores/user/hooks";
import { Blog, Like } from "@/app/types";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-hot-toast";
import Spinner from "../common/Spinner";

const Like = ({ blog }: { blog: Blog }) => {
  const user = useUser();
  const [likes, setLikes] = useState<Like[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getLikes = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getBlogLikes(blog?.id);
      setLikes(res.data?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }, [blog]);

  const toggleLike = async (blogId: string, userId: string) => {
    if (likes.find((like) => like?.userId === userId)) {
      const res = await unlike(blogId, userId);
      toast.success(res.data?.message);
    } else {
      const res = await like(blogId, userId);
      toast.success(res.data?.message);
    }
    getLikes();
  };

  useEffect(() => {
    getLikes();
  }, [getLikes]);

  return (
    <>
      <button
        onClick={() => toggleLike(blog?.id, user?.id)}
        className="custom-button flex items-center gap-2 text-lg flex-row"
      >
        <AiOutlineHeart size={25} />
        {isLoading ? <Spinner className="w-4 h-4" /> : likes?.length}
      </button>
    </>
  );
};

export default Like;
