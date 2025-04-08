import { AnimatePresence, motion } from "motion/react";

export function SortMenu({}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute top-26 right-5 bg-accent-light shadow rounded p-4"
      >
        <p className="underline">Ordenar por:</p>
        <p className="menu-option mt-5">Más antiguo</p>
        <p className="menu-option mt-5">Más reciente</p>
        <p className="menu-option mt-5 ">Mayor edad</p>
        <p className="menu-option mt-5 ">Menor edad</p>
      </motion.div>
    </AnimatePresence>
  );
}
