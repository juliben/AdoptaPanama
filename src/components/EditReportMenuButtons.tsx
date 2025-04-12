import { TiDelete } from "react-icons/ti";
import { IoIosHeart } from "react-icons/io";
import { motion } from "motion/react";

type Props = {
  setOpen: (open: boolean) => void;
  setShowFoundConfirm: (show: boolean) => void;
  setShowEdit: (show: boolean) => void;
  setShowDeleteConfirm: (show: boolean) => void;
};

export const EditReportMenuButtons = ({
  setOpen,
  setShowFoundConfirm,
  setShowDeleteConfirm,
}: Props) => {
  return (
    <div className="flex flex-col items-start gap-5 px-5 py-3 pt-6">
      <motion.div
        onClick={() => setShowFoundConfirm(true)}
        whileTap={{
          scale: 0.98,
        }}
        className="flex gap-2 items-center"
      >
        {<IoIosHeart size={22} />}
        <p>Marcar como encontrado</p>
      </motion.div>
      {/* <motion.div
        onClick={() => setShowEdit(true)}
        whileTap={{
          scale: 0.98,
        }}
        className="flex items-center gap-2 text-md"
      >
        <MdEdit size={25} />
        <p>Editar datos</p>
      </motion.div> */}

      <motion.div
        onClick={() => setShowDeleteConfirm(true)}
        whileTap={{
          scale: 0.98,
        }}
        className="flex items-center gap-2 text-md"
      >
        <TiDelete size={26} />
        <p>Eliminar publicación</p>
      </motion.div>

      <motion.p
        whileTap={{
          scale: 0.98,
        }}
        onClick={() => setOpen(false)}
        className="self-center"
      >
        Cancelar
      </motion.p>
    </div>
  );
};
