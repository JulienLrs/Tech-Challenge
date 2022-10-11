import React, { useState } from "react";
import Equipage from "./components/Equipage";

const allMatelots = [
  {
    id: 1,
    name: "Eleftheria",
    adjectif: "",
    present: false
  },
  {
    id: 2,
    name: "Gennadios",
    adjectif: "",
    present: false
  },
  {
    id: 3,
    name: "Lysimachos",
    adjectif: "",
    present: true
  },
];



function App() {
  
  const [matelotId, setMatelotId] = useState(); // retour d'un tableau : res = [matelotId, setMatelotId]
  const [matelots, setMatelots] = useState(allMatelots);

  function handleStatusChange(id) {
    setMatelotId(id);
    const matelotToModify =  matelots.find(matelot => matelot.id === id);
    matelotToModify.present = !matelotToModify.present;
    const newMatelots = matelots.map(matelot => (matelot.id !== id ? matelot : matelotToModify));
    setMatelots(newMatelots);
  }
  
  return (
    <>
      <h1>Les Argonautes</h1>
      <h2>Ajouter un(e) Argonaute</h2>
      <p>Nom de l'Argonaute</p>
       
      <h2>Membre de l'équipage</h2>
      <div>Numéro de mon matelot vaut : {matelotId} </div>
      <Equipage matelots={allMatelots} handleStatusChange={handleStatusChange}/>
    </>
  );
}

export default App;
