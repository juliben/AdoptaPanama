import { TopMenu, LinePath } from "../components";

const Home = () => {
  return (
    <div className="lg:mx-10">
      <TopMenu />
      <div className="bg-light-gray m-5 rounded-3xl overflow-hidden relative lg:max-h-170">
        <div className="transform lg:-translate-y-13 lg:-translate-x-15 lg:-rotate-3">
          <LinePath />
        </div>
        <div className="relative   lg:bottom-145 lg:left-120 bg-white px-2 sm:px-5 sm:py-5 lg:px-8 lg:py-5 sm:text-3xl text-dark-primary font-semibold rounded-full -rotate-10 max-w-fit">
          GATOS
        </div>
        <div className="relative   lg:bottom-142 lg:left-150 bg-white  px-2 sm:px-5 sm:py-5 lg:px-8 lg:py-5  sm:text-3xl text-dark-primary font-semibold rounded-full rotate-8 max-w-fit">
          PERROS
        </div>

        <button className="relative bottom-20 left-50 sm:bottom-30 sm:left-60 lg:bottom-88 lg:left-112 py-2 px-2.5 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-6 lg:px-10 text-sm sm:text-lg lg:text-3xl bg-accent-light font-semibold rounded-full max-w-fit  -rotate-13 shadow hover:cursor-pointer hover:scale-102 active:scale-98 ">
          COMENZAR
        </button>
      </div>
    </div>
  );
};

export default Home;
