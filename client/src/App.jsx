import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Documentos from "./pages/Documentos";
import Solicitudes from "./pages/Solicitudes";
import Usuarios from "./pages/Usuarios";
import NotFound from "./components/NotFound";
import Login from "./pages/Login"

function App() {
  return (
    <>
    <Login/>
      <div className="flex">
        <SideBar />
        <div className="p-7 text-xl font-semibold flex-1 h-screen">
          <Routes>
            <Route path="/" element={<Documentos />} />
            <Route path="/Documentos" element={<Documentos />} />
            <Route path="/Solicitudes" element={<Solicitudes />} />
            <Route path="/Usuarios" element={<Usuarios />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
