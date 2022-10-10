import React from "react";

export default function TodoList(props) {
  return <p>"L'équipage se forme..."</p>;
}

{/* <ul>
  {props.equipage.map((matelot) => (
    // des que l'on vient itérrer,
    // il faut penser à les identifier à l'aide de key
    <li key={matelot.id}>
      {matelot.name} {matelot.adjectif}
    </li>
  ))}
</ul>; */}
