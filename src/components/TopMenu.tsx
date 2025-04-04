export const TopMenu = () => {
  return (
    <div className="flex flex-row items-center w-screen justify-between mt-7 px-7  lg:pr-10  text-sm  lg:text-xl max-w-full">
      <img
        src="/heart-green.png"
        alt="logo"
        className="w-4 h-4 lg:w-6 lg:h-6"
      />
      <div className="flex flex-row gap-2 md:gap-10">
        <p className="hover:cursor-pointer">Mascotas Perdidas</p>|
        <p className="hover:cursor-pointer">Adoptar</p>
        {/* <p>Help</p> */}
      </div>
      {/* <div className="flex-center text-center rounded-full border border-gray-300 px-2 py-2 md:px-5 md:py-2.5 font-semibold text-xs">
        Donate
      </div> */}
    </div>
  );
};
