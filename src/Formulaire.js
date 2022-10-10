import React, { useState } from "react";

export default function TodoForm() {
    const [name, setName] = useState("");

    function handleNouveauchange(e) {
        setNouveau(e.target.value);
    }

    return (
        <form>
            <input 
            type="text" 
            placeholder="inscris toi matelot !" 
            name="name"
            value={name}
            onChange={e => handleNouveauchange(e)}
            />
            <button type="submit">Ajouter</button>
        </form>
    )
}
