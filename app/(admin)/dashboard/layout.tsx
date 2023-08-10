import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row justify-between gap-12">
      <div className="w-1/4 h-full">
        <div className="flex flex-col gap-2">
          <Link
            href={"/dashboard/users"}
            className="custom-button w-full text-center"
          >
            Users
          </Link>
          <Link
            href={"/dashboard/blogs"}
            className="custom-button w-full text-center"
          >
            Blogs
          </Link>
        </div>
      </div>
      <div className="w-3/4 h-full ">{children}</div>
    </div>
  );
}
