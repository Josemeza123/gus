import React from "react";
import TablaSolicitudes from "../../components/TablaSolicitudes";

const Solicitudes = () => {
  return (
    <div className="m-2">
      
        <div className="">
          <button className="bg-green-300 m-2">Nueva Solicitud</button>
          <div>
            <label className="font-bold" htmlFor="">
              Buscar solicitud
            </label>
            <input
              className="m-3"
              type="text"
              placeholder="Ingresa una palabra clave"
            />
          </div>
        </div>
        <TablaSolicitudes />
      
    </div>
  );
};

export default Solicitudes;
