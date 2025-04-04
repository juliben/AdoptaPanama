import { TopMenu, LinePath, BlobOne, BlobTwo } from "../components";

const Home = () => {
  return (
    <div className="lg:mx-10">
      <TopMenu />
      <div className="relative  bg-light-gray m-5 rounded-3xl overflow-hidden md:h-130 lg:h-145 ">
        <LinePath />
        <div className="absolute top-[10%] left-[0%] w-[45%] z-0">
          <BlobOne />
        </div>
        <div className="bg-light-gray absolute h-[25%] w-[32%] bottom-[15%] left-[10%] -rotate-15 rounded-l-full" />

        <div className="pill -rotate-10 absolute top-[10%] left-[30%]">
          GATOS
        </div>
        <div className="pill rotate-8 absolute top-[29%] left-[40%]">
          PERROS
        </div>
        <button className="button-pill -rotate-13 absolute bottom-[14%] left-[33%] z-1 ">
          COMENZAR
        </button>
      </div>
    </div>
  );
};

export default Home;
