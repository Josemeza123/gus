import React from "react";
import edit from "./edit.svg";
import view from "./view.svg";
import trash from "./trash.svg";

const TablaSolicitudes = () => {
  const Titles = [
    { title: "Código" },
    { title: "Fecha" },
    { title: "Usuario" },
    { title: "Tipo_Doc" },
    { title: "Oficina" },
    { title: "Ubicación" },
    { title: "Acciones" },
  ];
  const Documentos = [
    {
      codigo: "003",
      fecha: "11/02/2024",
      usuario: "77777777",
      oficina: "gestion publica",
      documento: "Solicitud",
      ubicacion: "Archivado",
    },
  ];
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          {Titles.map((title, key) => (
            <th
              className="text-center border-collapse border-solid border-2 border-gray-500"
              key={key}
            >
              {title.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Documentos.map((documento, index) => (
          <tr key={index} className="text-sm">
            <td className="text-center border-collapse border-solid border-2 border-gray-500">
              {documento.codigo}
            </td>
            <td className="text-center border-collapse border-solid border-2 border-gray-500">
              {documento.fecha}
            </td>
            <td className="text-center border-collapse border-solid border-2 border-gray-500">
              {documento.usuario}
            </td>
            <td className="text-center border-collapse border-solid border-2 border-gray-500">
              {documento.documento}
            </td>
            <td className="text-center border-collapse border-solid border-2 border-gray-500">
              {documento.oficina}
            </td>
            <td className="text-center border-collapse border-solid border-2 border-gray-500">
              {documento.ubicacion}
            </td>
            <td className="text-center border-collapse border-solid border-2 border-gray-500">
              <button className="bg-yellow-600">
                <img className="w-8" src={edit} alt="" />
              </button>
              <button className="bg-yellow-100">
                <img className="w-8" src={view} />
              </button>
              <button className="bg-red-600">
                <img className="w-8" src={trash} alt="" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaSolicitudes;
