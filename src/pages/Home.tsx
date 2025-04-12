import {
  TopRow,
  MainBanner,
  PinkDiv,
  CarrouselDiv,
  Accordion,
} from "../components";
import { Analytics } from "@vercel/analytics/react";

export const Home = () => {
  return (
    <div className="lg:mx-10 h-screen w-full">
      <TopRow />
      <MainBanner />
      <PinkDiv />
      <CarrouselDiv />
      <Accordion />
      <Analytics />
    </div>
  );
};
