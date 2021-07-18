import React, { useEffect, useState } from "react";
import TodoCreator from "./Components/TodoCreator";
import TodoItem from "./Components/TodoItem";

export default function TodoMain() {
  const [itemList, setItemList] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/data/TodoItem.json").then(response =>
      response.json().then(data => setItemList(data.result))
    );
  }, []);

  const handleEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const handleEditInput = e => {
    setUpdatedTodo(e.target.value);
  };

  //백엔드로 수정된 데이터 request (update)
  const handleEditBtn = () => {
    setEditStatus(!editStatus);
  };

  // 백엔드로 delete 요청 보내기
  const handleDeleteBtn = () => {
    console.log("후렌치파이");
  };

  console.log(itemList);

  return (
    <div>
      <TodoCreator />
      <div>
        {itemList?.map((item, idx) => {
          return (
            <div key={item.id}>
              <TodoItem key={item.id} todoInfo={item} />
              <button key={idx} onClick={handleEditStatus}>
                수정하기
              </button>
              <button key={itemList.id} onClick={handleDeleteBtn}>
                삭제하기
              </button>
              {editStatus && <input onChange={handleEditInput} />}
              {editStatus && <button onClick={handleEditBtn}>업데이트</button>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
