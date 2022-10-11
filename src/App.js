import React, { useState, useEffect } from "react";
import Equipage from "./components/Equipage";
import Formulaire from "./Formulaire";

const allMatelots = [
  {
    id: 1,
    name: "Eleftheria",
    adjectif: "",
    present: false,
  },
  {
    id: 2,
    name: "Gennadios",
    adjectif: "",
    present: false,
  },
  {
    id: 3,
    name: "Lysimachos",
    adjectif: "",
    present: true,
  },
];

const key="react.matelots"

function App() {

  const [matelotId, setMatelotId] = useState(); // retour d'un tableau : res = [matelotId, setMatelotId]
  const [matelots, setMatelots] = useState(allMatelots);

  // Nous permet à la création du component, de chercher dans notre storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(matelots));
  }, [matelots])

  // Vient persister dans le storage notre donnée entrée 
  useEffect(() => {
    const matelotsRetrievedFromStorage = localStorage.getItem(key);
    if (matelotsRetrievedFromStorage) {
      setMatelots(JSON.parse(matelotsRetrievedFromStorage))
    }
  }, []);  // insertion d'une dépendance [] pour éviter les boucles infinies
  

  function handleStatusChange(id) {
    setMatelotId(id);
    const matelotToModify = matelots.find((matelot) => matelot.id === id);
    matelotToModify.present = !matelotToModify.present;
    const newMatelots = matelots.map((matelot) =>
      matelot.id !== id ? matelot : matelotToModify
    );
    setMatelots(newMatelots);
  }

  function handleMatelotCreation(name) {
    const newMatelot = {
      id: Date.now(),
      name,
      present: false,
      adjectif: ""
    };
    const allMatelot = [newMatelot, ...matelots];
    setMatelots(allMatelot);
  };

  return (
    <>
      <h1>Les Argonautes</h1>
      <h2>Ajouter un(e) Argonaute</h2>
      <p>Nom de l'Argonaute</p>
      <Formulaire handleMatelotCreation={handleMatelotCreation}/>
      <h2>Membre de l'équipage</h2>
      <div>Numéro de mon matelot vaut : {matelotId} </div>
      <Equipage
        matelots={matelots}
        handleStatusChange={handleStatusChange}
      />
    </>
  );
}

export default App;
