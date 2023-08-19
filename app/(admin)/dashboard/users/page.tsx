import React from "react";
import { baseURL } from "../../../_api/axiosInstance";
import UserList from "./userList";

const getUsers = async () => {
  const res = await fetch(`${baseURL}/users`, {
    cache: "no-store",
  });
  return res.json();
};

const Users = async () => {
  const responseData = await getUsers();
  return <UserList users={responseData?.data} />;
};

export default Users;
