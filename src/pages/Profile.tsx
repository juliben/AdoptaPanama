import { useContext } from "react";
import { TopRow } from "../components";
import { AuthContext } from "../contexts/AuthContext";
import { FaUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
// import { IoSettingsOutline } from "react-icons/io5";
import { IoIosList } from "react-icons/io";
import { signOut } from "../supabase/auth";
import { useNavigate } from "react-router-dom";
import { MenuOption } from "../components/MenuOption";

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
          <div className="relative flex flex-col p-3 gap-3 pt-10 ">
            <MenuOption
              title="Mis publicaciones"
              icon={<IoIosList size={25} />}
              onClick={() => navigate("/my-posts")}
            />
            {/* 
            <MenuOption
              title="Configuración"
              icon={<IoSettingsOutline size={25} />}
              onClick={() => navigate("/settings")}
            /> */}
            <MenuOption
              title="Cerrar sesión"
              icon={<AiOutlineLogout size={25} />}
              onClick={handleSignOut}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
