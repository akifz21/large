"use client";
import React, { useState } from "react";
import { User } from "@/app/types";
import Table from "@/app/_components/dashboard/Table";
import { deleteUser, patchUser } from "@/app/_api/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FiCheck, FiEdit, FiX } from "react-icons/fi";

interface Props {
  users: User[];
}
const UserList = ({ users }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();
  const [role, setRole] = useState("");

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteUser(id);
      toast.success(res?.data?.message);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const roles = ["MEMBER", "AUTHOR", "MODERATOR", "ADMIN"];

  const handleUpdate = async (id: string, data: any) => {
    try {
      const res = await patchUser(id, { role: data });
      toast.success(res?.data?.message);
      setIsEdit(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(role);

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
          { name: "Update Role" },
        ]}
        body={users.map((user) => [
          user?.first_name,
          user?.last_name,
          user?.email,
          !isEdit ? (
            user?.role
          ) : (
            <select
              onChange={(e: any) => setRole(e.target.value)}
              className="custom-input"
              defaultValue={user?.role}
            >
              {roles.map((role) => (
                <option value={role}>{role}</option>
              ))}
            </select>
          ),
          <button
            onClick={() => handleDelete(user?.id)}
            className="custom-button dark:bg-red-600 dar:text-white bg-red-600 text-white"
          >
            Delete
          </button>,
          isEdit ? (
            <div className="flex flex-row gap-4 items-center">
              <button
                onClick={() => handleUpdate(user?.id, role)}
                className="custom-button w-full inline-flex items-center  dark:bg-green-600 dark:text-white justify-center text-xl bg-green-600 text-white"
              >
                <FiCheck />
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className="custom-button w-full inline-flex items-center justify-center text-xl bg-red-600 dark:bg-red-600 dark:text-white text-white"
              >
                <FiX />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="custom-button w-full inline-flex items-center justify-center text-xl dark:bg-blue-700 dark:text-white bg-blue-600 text-white"
            >
              <FiEdit />
            </button>
          ),
        ])}
      />
    </>
  );
};

export default UserList;
