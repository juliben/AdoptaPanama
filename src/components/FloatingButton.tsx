import { IoCall } from "react-icons/io5";

export const FloatingButton = () => {
  return (
    <div className="flex rounded-full px-4.5 py-4.5 border border-gray-500 bg-accent-light fixed bottom-[5vh] right-[5vh]">
      <IoCall size={30} color={"#276e61"} />
    </div>
  );
};
