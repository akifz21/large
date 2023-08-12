"use client";
import React from "react";
import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { User } from "@/app/types";
import { ROLES } from "../../../_lib/constants/user";

interface Props {
  users: User[];
}
const UserList = ({ users }: Props) => {
  console.log(`hey`, users);
  const [role, setRole] = useState(ROLES[0]);
  const handleChangeRole = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log;
  };
  return (
    <div className="flex flex-col gap-3">
      <table className="shadow-custom-sh">
        <thead>
          <tr>
            <th className="py-2">First Name</th>
            <th className="py-2">Last Name</th>
            <th className="py-2">Email</th>
            <th className="py-2"> Role</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users?.map((user: User, key: number) => (
            <tr
              className="bg-gray-100 shadow-sm rounded hover:shadow-custom-sh cursor-pointer"
              key={key}
            >
              <td className="py-2 px-2">{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>
                <Listbox value={user.role} onChange={setRole}>
                  <Listbox.Button>{user.role}</Listbox.Button>
                  <Listbox.Options>
                    {ROLES.map((role, key: number) => (
                      <Listbox.Option
                        key={key}
                        value={role}
                        // disabled={person.unavailable}
                      >
                        {role}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Listbox>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
