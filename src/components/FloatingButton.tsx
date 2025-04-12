import { useState } from "react";

import { IoCall } from "react-icons/io5";

type Props = {
  contact: string;
};

export const FloatingButton = ({ contact }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen(!open)}
      className="flex rounded-full px-4.5 py-4.5 border border-gray-500 text-dark-primary text-xl  bg-accent-light fixed bottom-[5vh] right-[5vh]"
    >
      {!open ? <IoCall size={30} /> : <>{contact}</>}
    </button>
  );
};
