import { Home, Register, SignIn } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
