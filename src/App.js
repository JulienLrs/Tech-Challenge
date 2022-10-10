import React from "react";
import Equipage from "./components/Equipage";

const allMatelots = [
  {
    id: 1,
    name: "Eleftheria",
    adjectif: "",
  },
  {
    id: 2,
    name: "Gennadios",
    adjectif: "",
  },
  {
    id: 3,
    name: "Lysimachos",
    adjectif: "",
  },
];

function App() {

  return (
    <>
      <h1>Les Argonautes</h1>
      <h2>Ajouter un(e) Argonaute</h2>
      <p>Nom de l'Argonaute</p>
      
      <h2>Membre de l'équipage</h2>
      
      <Equipage todos={allMatelots}/>
    </>
  );
}

export default App;
