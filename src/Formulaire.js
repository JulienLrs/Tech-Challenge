import React, { useState } from "react";

export default function MatelotForm({ handleMatelotCreation }) {
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleMatelotCreation(name);
    setName("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Inscris-toi matelot !"
        name="name"
        value={name}
        onChange={(e) => handleNameChange(e)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}
