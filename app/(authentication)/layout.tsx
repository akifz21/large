import Link from "next/link";
import Logo from "../_components/common/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-red-200 w-full h-screen grid grid-cols-2">
      <div className="bg-[#18181B] text-[#ffffff] flex flex-col justify-between p-10">
        <h1 className="tracking-widest text-xl">
          <Logo className="text-2xl" />
        </h1>
        <p className="font-light tracking-widest">
          Acme Inc “This library has saved me countless hours of work and helped
          me deliver stunning designs to my clients faster than ever before.”
        </p>
      </div>
      <div className="bg-[#ffffff] flex items-center justify-center relative">
        {children}
      </div>
    </div>
  );
}
