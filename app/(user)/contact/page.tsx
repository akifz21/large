import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col  items-center gap-4 justify-center">
      <h1 className="text-bold text-5xl">Contact</h1>
      <p className="opacity-60">
        Have something to say? We are here to help. Fill up the form or send
        email
      </p>
      <form className="flex flex-col gap-6 w-1/2 " action="">
        <input type="text" className="custom-input" placeholder="Name" />
        <input type="text" className="custom-input" placeholder="Surname" />
        {/* <input type="text" className="custom-input" placeholder="Email" /> */}
        <textarea className="custom-input" rows={10} placeholder="Message.." />
        <button className="custom-button w-1/4">Send</button>
      </form>
    </div>
  );
};

export default Page;
