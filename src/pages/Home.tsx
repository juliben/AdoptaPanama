import { TopRow } from "./../components/TopRow";

import { MainBanner, PinkDiv } from "../components";
import { CarrouselDiv } from "../components/CarrouselDiv";

export const Home = () => {
  return (
    <div className="lg:mx-10 h-screen w-full">
      <TopRow />
      <MainBanner />
      <PinkDiv />
      <CarrouselDiv />
    </div>
  );
};
