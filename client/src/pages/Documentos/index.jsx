import React from "react";
import TablaDocumentos from "../../components/TablaDocumentos";

const Documentos = () => {
  return (
    <>
      <button className="bg-green-300 m-2">Nuevo Documento</button>
      <div>
        <label className="font-bold" htmlFor="">
          Buscar documento
        </label>
        <input
          className="m-3"
          type="text"
          placeholder="Ingresa una palabra clave"
        />
      </div>
      <TablaDocumentos />
    </>
  );
};

export default Documentos;
