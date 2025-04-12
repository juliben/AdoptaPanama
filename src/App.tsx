import {
  Home,
  Register,
  SignIn,
  Profile,
  Listings,
  CreateListing,
  Reports,
  CreateReport,
  Contact,
  Fork,
  MyPosts,
  EditListing,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { PetDetails } from "./pages/PetDetails";
import { AnimatePresence, motion } from "motion/react";

function App() {
  return (
    <AuthProvider>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/create-report" element={<CreateReport />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/pet-details/:id"
              element={
                <motion.div
                  initial={{ translateX: "100%" }}
                  animate={{ translateX: "0%" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  exit={{ translateX: ["100%"], opacity: 0 }}
                >
                  <PetDetails />
                </motion.div>
              }
            />
            <Route
              path="/edit-listing/:id"
              element={
                <motion.div
                  initial={{ translateX: "100%" }}
                  animate={{ translateX: "0%" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  exit={{ translateX: ["100%"], opacity: 0 }}
                >
                  <EditListing />
                </motion.div>
              }
            />
            <Route
              path="/my-posts/"
              element={
                <motion.div
                  initial={{ translateX: "100%" }}
                  animate={{ translateX: "0%" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  exit={{ translateX: ["100%"], opacity: 0 }}
                >
                  <MyPosts />
                </motion.div>
              }
            />
            <Route path="/way" element={<Fork />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
