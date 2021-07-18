import React, { useState } from "react";
import "../style/TodoCreator.css";

function TodoCreator() {
  const [todoItem, setTodoItem] = useState("");
  const [initialTime, setInitialTime] = useState("");
  const [editTime, setEditTime] = useState("");
  const [refId, setRefId] = useState(0);

  const handleInput = e => {
    setTodoItem(e.target.value);
  };

  const handleRefInput = e => {
    if (!Number.isInteger(parseInt(e.target.value))) {
      alert("숫자만 입력해주세요!");
      e.target.value = "";
    }
    setRefId(parseInt(e.target.value));
  };

  const handleAddBtn = () => {
    const date = new Date();
    setInitialTime(
      "date >>",
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };

  return (
    <div className="TodoCreator">
      <h1 className="title">To Do App</h1>
      <main className="inputBox">
        <input
          className="todoInput"
          onChange={handleInput}
          placeholder="할 일을 입력해주세요"
        />
        {/* 조건부로 돌려서 만약 입력한 아이템 번호가 백에서 받은 아이템
        아이디 range에 없는 숫자면 입력 번호를 다시 해달라고 하기 */}
        <input
          className="refInput"
          placeholder="참조 todo 아이템 번호를 입력해주세요."
          onChange={handleRefInput}
        />
        <button className="inputBtn" onClick={handleAddBtn}>
          추가하기
        </button>
      </main>
    </div>
  );
}

export default TodoCreator;
