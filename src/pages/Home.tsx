import { TopMenu, LinePath } from "../components";

const Home = () => {
  return (
    <div className="lg:mx-10">
      <TopMenu />
      <div className="relative bg-light-gray m-5 rounded-3xl overflow-hidden  md:max-h-130 lg:max-h-170 ">
        <div className="transform -rotate-4 translate-x-[-5%] translate-y-[-10%]">
          <LinePath />
        </div>
        <div className="pill -rotate-10 absolute top-[10%] left-[30%]">
          GATOS
        </div>
        <div className="pill rotate-8 absolute top-[29%] left-[40%]">
          PERROS
        </div>
        <button className="button-pill -rotate-13 absolute bottom-[14%] left-[33%]  ">
          COMENZAR
        </button>
      </div>
    </div>
  );
};

export default Home;
