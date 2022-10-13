import React, { useState } from "react";
import './Formulaire.css';

const Inscription = ({ handleMatelotCreation }) => {
  const [name, setName] = useState("");
  const [adjectif, setAdjectif] = useState("");
  const collectData = async () => {
    console.warn(name);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, adjectif }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAdjectifChange(e) {
    setAdjectif(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleMatelotCreation(name, adjectif);
    setName("");
    setAdjectif("");
  }

  return (
    
    <form onSubmit={handleFormSubmit}>
      <div class="new-member-form">
      <input
        className="inputBox"
        type="text"
        placeholder="Inscris-toi matelot !"
        name="name"
        value={name}
        onChange={(e) => handleNameChange(e)}
      />
      </div>
      <div class="new-member-form">
      <input
        className="inputBox"
        type="text"
        placeholder="Adjectif"
        name="adjectif"
        value={adjectif}
        onChange={(e) => handleAdjectifChange(e)}
      />
      </div>
      <div class="new-member-form">
      <button 
        className="formButton" 
        type="submit"
        onClick={collectData}>
        Ajouter
      </button>
      </div>
    </form>
    
  );
};

export default Inscription;

