import React from "react";
import Presence from "./Presence";

export default function Equipage(props) {
  return (
    <ul>
      {props.matelots.map((matelot) => (
        <Presence
          key={matelot.id}
          data={matelot}
          handleStatusChange={props.handleStatusChange}
        />
      ))}
    </ul>
  );
}
