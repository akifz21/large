"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { logout } from "../../_stores/user/actions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function ProfileDropdown() {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
    toast.success("Logout successfully");
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <>
          <Menu.Button className="nav-item">Profile</Menu.Button>
        </>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -right-24 mt-2 w-56 top-8 origin-top-right divide-y divide-gray-100 rounded-md dark:bg-dark-color dark:ring-gray-950 p-2 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 flex flex-col gap-2">
              <Menu.Item>
                <button
                  type="button"
                  className="custom-button w-full shadow-none"
                >
                  Edit Profile
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  type="button"
                  className="custom-button w-full shadow-none"
                >
                  My Blogs
                </button>
              </Menu.Item>
              <Menu.Item>
                <Link href={"/blog/post"}>
                  {" "}
                  <button className="custom-button w-full shadow-none">
                    Post Blog
                  </button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="custom-button w-full shadow-none"
                  onClick={() => handleLogout()}
                >
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
