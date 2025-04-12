import { useFetchCounts } from "../hooks/";

export const DesktopPinkDiv = () => {
  const { found, adopted } = useFetchCounts();

  return (
    <div className="bg-white mt-10 desktop flex-col">
      <h2 className="mb-2 lg:text-5xl sm:text-2xl md:text-3xl lg:mt-10 lg:mb-5">
        AdoptaPanama
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex my-5 relative rounded-3xl w-full  overflow-hidden">
          <img src="/pink-blob-bg.svg" alt="" className="w-full" />
          <div className="absolute">
            <img
              src="/perrito.png"
              className="relative brightness-110 right-[10%]"
            />
          </div>
        </div>
        <div className="flex flex-col mx-10 mt-9 sm:text-sm md:text-lg lg:text-xl justify-between mb-4 sm:test">
          <div className="text-gray-700 flex flex-col gap-5">
            <p>
              AdoptaPanama es una plataforma sin fines de lucro para ayudar a
              los animales de nuestra comunidad.
            </p>
            <p>
              Es un espacio donde puedes publicar mascotas que busquen hogar,
              así como también mascotas perdidas.
            </p>
          </div>
          <div>
            <div className="desktop-counter-container">
              <span className="text-4xl">{adopted}</span> mascotas adoptadas
            </div>
            <div className="desktop-counter-container">
              <span className="text-4xl">{found}</span> mascotas encontradas
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
