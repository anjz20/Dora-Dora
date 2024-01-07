import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import AITransformPage from "./pages/AITransformPage/AITransformPage";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="bg-slate-950 text-white">
        {location.pathname !== "/" && <Header />}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/ai-transform" element={<AITransformPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
