"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { authLogin } from "../../_api/auth";
import { useRouter } from "next/navigation";
import { login } from "../../_stores/user/actions";
import { toast } from "react-toastify";
import { createUser } from "@/app/_api/user";
import Link from "next/link";

export default function RegisterModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const [formData, setFormData] = useState({});
  const router = useRouter();
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response: any = await createUser(formData);
      if (response.status === 200) {
        toast.success("Register successfully");
        router.push("/");
      } else {
        console.log(response);
        toast.error(response.response.data.message);
      }
    } catch (error: any) {
      toast.error("err");
      console.log(error);
    }
  };

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <Link
          href={"/signup"}
          // type="button"
          // onClick={openModal}
          className="nav-item"
        >
          Register
        </Link>
      </div>
    </>
  );
}
