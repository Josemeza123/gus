import React from "react";
import imagen from "./portada.jpg";
import logo from "./perfil.png";

const Login = () => {
  return (
    <>
      <div className="flex w-screen h-screen">
        <div className=" w-4/5 h-full">
          <img className="w-full h-full" src={imagen} alt="portada" />
        </div>

        <div className="w-1/5 bg-blue-400 h-screen content-center">
          <div className="grid justify-items-center">
            <div>
              <img
                className="rounded-full w-20 justify-center"
                src={logo}
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <form className="grid grid-cols-2 gap-4 place-content-center px-10 py-2" action="">
                <label className="" htmlFor="">
                  Usuario :
                </label>
                <input className="full" type="text" />
                <label className="" htmlFor="">
                  Contraseña :
                </label>
                <input className="w-full" type="password" />                
              </form>             
            </div>
            <button className="bg-green-600 w-1/3 ">Ingresar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
