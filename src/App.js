import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./matelot-data.json";
import Formulaire from "./Formulaire";

const key = "react.matelots";

const App = (props) => {
  const [matelots, setMatelots] = useState(data);
  const [matelotId, setMatelotId] = useState();
  const matelot = props.data;

  function handleMatelotCreation(name, adjectif) {
    const newMatelot = {
      id: Date.now(),
      name,
      adjectif,
    };
    const allMatelot = [newMatelot, ...matelots];
    setMatelots(allMatelot);
  }

  function handleStatusChange(id) {
    setMatelotId(id);
    const matelotToModify = matelots.find((matelot) => matelot.id === id);
    matelotToModify.present = !matelotToModify.present;
    const newMatelots = matelots.map((matelot) =>
      matelot.id !== id ? matelot : matelotToModify
    );
    setMatelots(newMatelots);
  }

  // Nous permet à la création du component, de chercher dans notre storage
  useEffect(() => {
    const matelotsRetrievedFromStorage = localStorage.getItem(key);
    if (matelotsRetrievedFromStorage) {
      setMatelots(JSON.parse(matelotsRetrievedFromStorage));
    }
  }, []); // insertion d'une dépendance [] pour éviter les boucles infinies

  // Vient persister dans le storage notre donnée entrée
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(matelots));
  }, [matelots]);

  return (
    <div className="app-container">
      <h1>Les Argonautes</h1>
      <h2>Ajouter un(e) Argonaute</h2>
      <p>Nom de l'Argonaute</p>

      <Formulaire handleMatelotCreation={handleMatelotCreation} />

      <h2>Membre de l'équipage</h2>
      <table>
        <thead>
          <tr>
            <th>Matelot</th>
            <th>Adjectif</th>
            <th>Présent</th>
          </tr>
        </thead>
        <tbody>
          {matelots.map((matelot) => (
            <tr>
              <td>
                <input
                  type="checkbox"
                  key={matelot.id}
                  checked={matelot.present}
                  data={matelot}
                  handleStatusChange={props.handleStatusChange}
                  onChange={() => props.handleStatusChange(matelot.id)}
                />
                {matelot.name}
              </td>
              <td>{matelot.adjectif}</td>
              <td>
                <div>{matelot.present ? "A bord !" : "Manque à l'appel"}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
};

export default App;
