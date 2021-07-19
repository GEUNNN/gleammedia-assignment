import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoCreator from "./Components/TodoCreator";
import TodoItem from "./Components/TodoItem";
import "./style/TodoMain.css";

function TodoMain() {
  const [itemList, setItemList] = useState([]);
  const [editStatus, setEditStatus] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8030/todo-list")
      .then(response => {
        setItemList(response.data.result);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearchInput = e => {
    setSearchKeyword(e.target.value);
  };

  const filterSearch = item => {
    if (searchKeyword === "") {
      return item;
    } else {
      if (item.item.toLowerCase().includes(searchKeyword.toLowerCase()))
        return item;
    }
  };

  const handleEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const handleEditInput = e => {
    setUpdatedTodo(e.target.value);
  };

  //백엔드로 수정된 데이터 request (update)
  const handleEditBtn = () => {
    axios.post("http://localhost:8030/todo-list", {});
  };

  // 백엔드로 delete 요청 보내기
  const handleDeleteBtn = e => {
    // console.log(e.target.className);
    axios
      .delete(`http://localhost:8030/todo-list?id=${e.target.className}`, {
        data: { id: e.target.className },
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.error(error));
  };

  console.log("itemlist >>", itemList);

  return (
    <div>
      <TodoCreator itemId={itemList?.map(item => item.id)} />
      <div className="todoRetrieve">
        <div className="searchbox">
          <span>검색하기: </span>
          <input
            className="searchInput"
            onChange={handleSearchInput}
            placeholder="할 일을 검색해주세요"
          />
        </div>
        {itemList
          ?.filter(item => filterSearch(item))
          .map((item, idx) => {
            return (
              <div key={item.id} className="todoItem">
                <TodoItem key={item.id} todoInfo={item} />
                <button key={idx} onClick={handleEditStatus}>
                  수정하기
                </button>
                <button
                  className={item.id}
                  key={itemList.id}
                  onClick={handleDeleteBtn}
                >
                  삭제하기
                </button>
                {editStatus && <input onChange={handleEditInput} />}
                {editStatus && (
                  <button onClick={handleEditBtn}>업데이트</button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default React.memo(TodoMain);
