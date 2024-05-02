import React from "react";
import TablaUsuarios from "../../components/TablaUsuarios";

const Usuarios = () => {
  return (
    <>
    <div><button className="bg-green-300 m-2">Nuevo Usuario</button>
      <div>
        <label className="font-bold" htmlFor="">
          Buscar usuario
        </label>
        <input
          className="m-3"
          type="text"
          placeholder="Ingresa una palabra clave"
        />
      </div>
      <TablaUsuarios /></div>
     
    </>
  );
};

export default Usuarios;
