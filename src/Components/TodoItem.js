import React from "react";
import "../style/TodoItem.css";

export default function TodoItem(list) {
  console.log("todoitem props>>", list);

  const { id, item, initialTime, refId } = list.todoInfo;
  return (
    <div className="TodoItem">
      <div className="itemData">
        <p>{id}</p>
        <p>{item}</p>
        <p>{initialTime}</p>
        {!(refId === 0) && <p>{refId}</p>}
      </div>
    </div>
  );
}
