import { useState } from "react";

import { IoCall } from "react-icons/io5";

export const FloatingButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex rounded-full px-4.5 py-4.5 border border-gray-500 text-dark-primary text-xl  bg-accent-light fixed bottom-[5vh] right-[5vh]"
    >
      {!open ? <IoCall size={30} /> : "+507 6147 2211"}
    </button>
  );
};
