import { motion } from "motion/react";
import { TopRow } from "../components";

export const CreateListing = () => {
  return (
    <div>
      <TopRow />
      <div className="flex flex-col p-7  h-screen bg-light-gray rounded-t-3xl mt-4">
        <h3 className=" text-dark-primary">Crear una publicación</h3>
        <form className="mt-7">
          <p>Especie *</p>
          <div className="flex space-x-4 my-3">
            <label>
              <input
                id="dog"
                name="species"
                type="checkbox"
                className="mr-2 accent-primary "
              />
              Perro
            </label>
            <label>
              <input
                id="cat"
                name="species"
                type="checkbox"
                className="mr-2  accent-primary "
              />
              Gato
            </label>
            <label>
              <input
                id="other"
                name="species"
                type="checkbox"
                className="mr-2  accent-primary"
              />
              Otro
            </label>
          </div>
          <p>Imágenes *</p>
          <input
            className="input bg-white my-3"
            placeholder="Ingrese las URLs de las fotos"
          />
          <p>Nombre *</p>
          <input
            className="input bg-white my-3"
            placeholder="Nombre del animal"
          />
          <p>Edad</p>
          <input
            type="number"
            max="15"
            className="input bg-white my-3 max-w-[100px] "
            placeholder="0"
          />
          <p>Ubicación</p>
          <input className="input bg-white my-3" placeholder="Ubicación" />
          <p>Descripción</p>
          <textarea
            className="input bg-white my-3 h-[110px] rounded-2xl  "
            placeholder=""
          />
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="button-submit w-full"
            type="submit"
          >
            Publicar
          </motion.button>
        </form>
      </div>
    </div>
  );
};
