import React from "react";
import "../style/TodoItem.css";

export default function TodoItem(list) {
  console.log("todoitem props>>", list);

  const { id, item, inital_date, final_edit_date, ref_id } = list.todoInfo;
  return (
    <div className="TodoItem">
      <div className="itemData">
        <span>{id}. </span>
        <span>{item}</span>
        <p>최초 작성일: {inital_date}</p>
        <p>최종 수정일: {final_edit_date}</p>
        {!(ref_id === 0) && <p>@{ref_id}</p>}
      </div>
    </div>
  );
}
