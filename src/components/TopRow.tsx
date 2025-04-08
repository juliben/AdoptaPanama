import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { HamburgerMenu, DrawerMenu, TopMenu } from "./";

export const TopRow = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <>
      <TopMenu />
      <HamburgerMenu onClick={() => setDrawerVisible(true)} />{" "}
      <AnimatePresence>
        {drawerVisible && (
          <DrawerMenu onClick={() => setDrawerVisible(false)} />
        )}
      </AnimatePresence>
    </>
  );
};
