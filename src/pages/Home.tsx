import { useState } from "react";
import { AnimatePresence } from "motion/react";
import {
  HamburgerMenu,
  TopMenu,
  DrawerMenu,
  MainBanner,
  PinkDiv,
} from "../components";

const Home = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <div className="lg:mx-10 h-screen w-full">
      <TopMenu />
      <HamburgerMenu onClick={() => setDrawerVisible(true)} />{" "}
      <AnimatePresence>
        {drawerVisible && (
          <DrawerMenu onClick={() => setDrawerVisible(false)} />
        )}
      </AnimatePresence>
      <MainBanner drawerVisible={drawerVisible} />
      <PinkDiv />
    </div>
  );
};

export default Home;
