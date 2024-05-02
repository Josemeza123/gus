import React from "react";

const TablaDocumentos = () => {
  const Titles = [
    { title: "Código" },
    { title: "Fecha" },
    { title: "Año" },
    { title: "Usuario" },
    { title: "Tipo_Doc" },
    { title: "Num_Doc" },
    { title: "Num_Folios" },
    { title: "Oficina" },
    { title: "Descripción del Documento" },
    { title: "Ubicación" },
    { title: "Acciones" },
  ];
  const Documentos = [
    {
      codigo: "003",
      fecha: "11/02/2024",
      año: "2021",
      usuario: "77777777",
      documento: "Memorandum",
      num_doc: "0003",
      num_fol: "F_0002",
      oficina: "gestion publica",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni libero nam magnam perferendis unde sint cupiditate? Ex illum suscipit architecto, voluptatem, necessitatibus sit autem quisquam consequuntur accusantium quod voluptate",
      ubicacion: "Archivado",
    },
  ];
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            {Titles.map((title, key) => (
              <th
                className="text-center  border-collapse border-solid border-2 border-gray-500"
                key={key}
              >
                {title.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Documentos.map((documento, index) => (
            <tr className="text-sm" key={index}>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.codigo}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.fecha}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.año}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.usuario}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.documento}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.num_doc}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.num_fol}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.oficina}
              </td>
              <td className="text-justify border-collapse border-solid border-2 border-gray-500">
                {documento.descripcion}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                {documento.ubicacion}
              </td>
              <td className="text-center border-collapse border-solid border-2 border-gray-500">
                <button className="bg-red-600">eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaDocumentos;
