import {
  TopRow,
  MainBanner,
  PinkDiv,
  CarrouselDiv,
  Accordion,
  DesktopPinkDiv,
} from "../components";
import { Analytics } from "@vercel/analytics/react";

export const Home = () => {
  return (
    <div className="h-screen max-w-screen mx-2 lg:mx-10">
      <TopRow />
      <MainBanner />
      <PinkDiv />
      <DesktopPinkDiv />
      <CarrouselDiv />
      <Accordion />
      <Analytics />
    </div>
  );
};
