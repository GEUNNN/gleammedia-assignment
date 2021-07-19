import React, { useState } from "react";
import axios from "axios";
import "../style/TodoCreator.css";

function TodoCreator(props) {
  const [todoItem, setTodoItem] = useState("");
  const [initialDate, setInitialDate] = useState("");
  // const [editTime, setEditTime] = useState("");
  const [refId, setRefId] = useState(0);

  const handleInput = e => {
    setTodoItem(e.target.value);
    const date = new Date();

    setInitialDate(
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  };

  const handleRefInput = e => {
    let refNumber = parseInt(e.target.value);
    if (!Number.isInteger(refNumber)) {
      alert("숫자만 입력해주세요!");
      e.target.value = "";
    } else {
      if (props.itemId.includes(refNumber)) {
        setRefId(refNumber);
      } else {
        alert("참조 아이템 번호가 올바르지 않습니다.");
        e.target.value = "";
      }
    }
  };

  // 백엔드로 post 요청 보내기
  const handleAddBtn = () => {
    axios
      .post("http://localhost:8030/todo-list", {
        todoItem: todoItem,
        refId: refId,
        initialDate: initialDate,
        editTime: initialDate,
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log("error >>", error);
      });
  };

  console.log("백에서 넘어온 아이템 id >>", props.itemId);

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

export default React.memo(TodoCreator);
