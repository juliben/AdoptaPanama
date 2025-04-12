import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LuPlus, LuMinus } from "react-icons/lu";

export const Accordion = () => {
  const [activeQuestion, setActiveQuestion] = useState([]);

  const questions = [
    {
      id: 1,
      question: "¿Qué es AdoptaPanamá?",
      answer:
        "Es una plataforma sin fines de lucro para ayudar a los animales de nuestra comunidad. En AdoptaPanama se puede publicar mascotas que busquen hogar y mascotas perdidas.",
    },
    {
      id: 2,
      question: "¿Por qué tengo que crear una cuenta para poder publicar?",
      answer:
        "Necesitas una cuenta para poder gestionar tus publicaciones. Si no quieres usar tu correo electrónico real, puedes usar uno falso. AdoptaPanama no recopila ni usa tu información personal.",
    },
    {
      id: 3,
      question: "¿Puedo publicar una mascota que encontré en la calle?",
      answer: "Sí! Puedes usar la sección de mascotas perdidas.",
    },
    {
      id: 4,
      question: "¿AdoptaPanamá cobra alguna comisión?",
      answer:
        "No, es una plataforma totalmente gratuita. No cobramos por publicar ni por adoptar (ni por nada).",
    },
    {
      id: 5,
      question: "¿Cómo me puedo contactar con ustedes?",
      answer: "Puedes enviar un correo a julietaben16@gmail",
    },
  ];

  return null;
};
