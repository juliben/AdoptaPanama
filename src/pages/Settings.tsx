import { useContext } from "react";
import { TopRow } from "../components";
import { AuthContext } from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { signOut } from "../supabase/auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  const handleSignOut = async () => {
    await signOut();
    console.log("Signed out");
    navigate("/");
  };
  return (
    <div>
      <TopRow />

      <div className=" mt-7">
        <div className="flex flex-row items-center gap-2 mx-4 ">
          <div className="rounded-full bg-accent-light w-12 h-12 flex-center">
            {user?.profile_image ? (
              <img src={user.profile_image} />
            ) : (
              <FaUser color="black" />
            )}
          </div>
          <div className="flex-col">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="bg-light-gray h-screen mt-5 rounded-t-4xl">
          <div className="flex flex-col p-6 gap-10 pt-10 ">
            <div className="flex flex-row items-center gap-2">
              <IoIosList size={25} />
              <p>Mis publicaciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
