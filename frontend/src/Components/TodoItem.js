import React, { useState } from "react";
import axios from "axios";
import "../style/TodoItem.css";

export default function TodoItem(list) {
  const [editStatus, setEditStatus] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [editTime, setEditTime] = useState("");
  const [refInput, setRefInput] = useState("0");
  const [done, setDone] = useState(0);

  const handleCheckbox = () => {
    if (done === 0) {
      setDone(1);
    } else if (done === 1) {
      setDone(0);
    }
  };

  const handleEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const handleEditInput = e => {
    setUpdatedTodo(e.target.value);

    const date = new Date();
    setEditTime(
      date.getFullYear() +
        "-" +
        ("0" + (date.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + date.getDate()).slice(-2)
    );
  };

  const handleRefInput = e => {
    if (list.itemId.includes(e.target.value)) {
      setRefInput(e.target.value);
    }
    alert("참조 번호를 다시 확인해주세요.");
    e.target.value = "";
  };

  const handleEditBtn = () => {
    axios
      .put("http://localhost:8030/todo-list", {
        item: updatedTodo,
        refId: refInput,
        editTime: editTime,
      })
      .then(response => alert(response.data))
      .catch(error => console.error(error));
  };

  const handleDeleteBtn = e => {
    axios
      .delete("http://localhost:8030/todo-list", { data: e.target.id })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  };

  console.log("todoitem props>>", list);
  console.log("handle edit input >>", updatedTodo);

  const { id, item, inital_date, final_edit_date, ref_id } = list.todoInfo;

  return (
    <div className="TodoItem">
      <div className="itemData">
        <span>{id}. </span>
        <span>{item}</span>
        <input type="checkbox" onClick={handleCheckbox} />
        <p>최초 작성일: {inital_date}</p>
        <p>최종 수정일: {final_edit_date}</p>
        {!(ref_id === 0) && <p>@{ref_id}</p>}
        <div className="btnBox">
          <button className="btn" onClick={handleEditStatus}>
            수정하기
          </button>
          <button id={id} onClick={handleDeleteBtn}>
            삭제하기
          </button>
        </div>
      </div>
      <div className="editBox">
        {editStatus && (
          <input
            className={id}
            type="text"
            placeholder="수정 부분을 입력해주세요."
            onChange={handleEditInput}
          />
        )}
        {editStatus && (
          <input
            type="number"
            placeholder="참조 todo를 입력해주세요"
            onChange={handleRefInput}
          />
        )}
        {editStatus && <button onClick={handleEditBtn}>업데이트</button>}
      </div>
    </div>
  );
}
