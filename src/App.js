import React from "react";
import { useState } from "react";
import { BaseColaboradores } from "./api/BaseColaboradores";

const App = () => {
  const [listaColab, setListaColab] = useState(BaseColaboradores);
  const [nombreColab, setNombreColab] = useState("");
  const [emailColab, setEmailColab] = useState("");
  const [buscarColab, setBuscarColab] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColab([
      ...listaColab,
      {
        nombre: nombreColab,
        correo: emailColab,
        id: listaColab.length + 1,

      },
    ]);
    setNombreColab('');
    setEmailColab('');
  };
  
  return (
    <div>
      <h1>Lista de Colaboradores</h1>
        <input type="text" placeholder="Busqueda" onChange={e => setBuscarColab(e.target.value)} value={buscarColab}></input>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={e => setNombreColab(e.target.value)} value={nombreColab}></input>
        <input type="email" placeholder="Email" onChange={e => setEmailColab(e.target.value)} value={emailColab}></input>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
      <ul>
        {listaColab
        .filter((item) => {
          return item.nombre.toLowerCase().includes(buscarColab.toLowerCase());
        })
        .map((colab) => {
          return (
          <li key={colab.id}>{colab.nombre} - {colab.correo}</li>
        );
          })}
      </ul>
    </div>
  );
};

export default App;
