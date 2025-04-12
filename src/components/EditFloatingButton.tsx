import { EditMenuButtons } from "./EditMenuButtons";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import { AuthContext } from "../contexts/AuthContext";
import supabase from "../supabase/supabase";
import { SyncLoader } from "react-spinners";

type Props = {
  id: string;
};

export const EditFloatingButton = ({ id }: Props) => {
  const user = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showAdoptedConfirm, setShowAdoptedConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!user) {
      alert("Por favor, vuelve a iniciar sesión");
      return;
    }
    setOpen(false);
    setLoading(true);

    try {
      const { error } = await supabase
        .from("pets")
        .update({ deleted: true })
        .eq("id", id);

      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate("/my-posts");
    }
  };

  const handleAdopted = async () => {
    if (!user) {
      alert("Por favor, vuelve a iniciar sesión");
      return;
    }
    setOpen(false);
    setLoading(true);

    try {
      const { error } = await supabase
        .from("pets")
        .update({ adopted: true })
        .eq("id", id);

      if (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      navigate("/my-posts");
    }
  };

  const handleCloseAll = () => {
    setShowAdoptedConfirm(false);
    setShowDeleteConfirm(false);
  };

  if (showAdoptedConfirm) {
    return (
      <div className="flex flex-col flex-center gap-5 rounded-4xl px-5 py-5 border border-gray-400  bg-accent-light fixed bottom-[5vh] right-[5vh]">
        <p>¿Marcar como adoptado?</p>
        <div className="flex gap-10">
          {!loading ? (
            <>
              <motion.p whileTap={{ scale: 0.98 }} onClick={handleAdopted}>
                Sí
              </motion.p>
              <motion.p whileTap={{ scale: 0.98 }} onClick={handleCloseAll}>
                Cancelar
              </motion.p>
            </>
          ) : (
            <SyncLoader
              color="#000000"
              className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
              size={3}
            />
          )}
        </div>
      </div>
    );
  }

  if (showDeleteConfirm) {
    return (
      <div className="flex flex-col flex-center gap-5 rounded-4xl px-5 py-5 border border-gray-400  bg-accent-light fixed bottom-[5vh] right-[5vh]">
        <p>¿Eliminar publicación?</p>
        <div className="flex gap-10">
          {!loading ? (
            <>
              <motion.p whileTap={{ scale: 0.98 }} onClick={handleDelete}>
                Sí
              </motion.p>
              <motion.p whileTap={{ scale: 0.98 }} onClick={handleCloseAll}>
                Cancelar
              </motion.p>
            </>
          ) : (
            <SyncLoader
              color="#000000"
              className="absolute top-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
              size={3}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => setOpen(!open)}
      className="flex rounded-4xl px-4.5 py-4.5 border border-gray-400   bg-accent-light fixed bottom-[5vh] right-[5vh]"
    >
      {!open ? (
        "Editar"
      ) : (
        <EditMenuButtons
          setOpen={setOpen}
          setShowAdoptedConfirm={setShowAdoptedConfirm}
          setShowEdit={setOpen}
          setShowDeleteConfirm={setShowDeleteConfirm}
        />
      )}
    </div>
  );
};
