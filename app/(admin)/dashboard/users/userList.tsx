"use client";
import React from "react";
import { User } from "@/app/types";
import Table from "@/app/_components/dashboard/Table";
import { deleteUser } from "@/app/_api/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface Props {
  users: User[];
}
const UserList = ({ users }: Props) => {
  console.log(`hey`, users);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteUser(id);
      toast.success(res?.data?.message);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Table
        searchable
        head={[
          { name: "Name" },
          { name: "Surname" },
          { name: "Email" },
          { name: "Role" },
          { name: "Delete" },
        ]}
        body={users.map((user) => [
          user?.first_name,
          user?.last_name,
          user?.email,
          user?.role,
          <button
            onClick={() => handleDelete(user?.id)}
            className="custom-button bg-red-600 text-white"
          >
            Delete
          </button>,
        ])}
      />
    </>
  );
};

export default UserList;
