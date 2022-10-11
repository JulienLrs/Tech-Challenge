import React from "react";

export default function Presence(props) {
  const matelot = props.data;
  return (
    // On vient tester dynamiquement la présence du matelot avec un opérateur ternaire
    <div>
      <input
        type="checkbox"
        checked={matelot.present}
        onChange={() => props.handleStatusChange(matelot.id)}
      />
      {matelot.name} - {matelot.present ? "A bord !" : "Manque à l'appel"}
    </div>
  );
}
