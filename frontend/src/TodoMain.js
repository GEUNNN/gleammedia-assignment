import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoCreator from "./Components/TodoCreator";
import TodoItem from "./Components/TodoItem";
import "./style/TodoMain.css";

function TodoMain() {
  const [itemList, setItemList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [editTime, setEditTime] = useState("");

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
      if (
        item.item.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.ref_id === parseInt(searchKeyword) ||
        item.done === parseInt(searchKeyword) ||
        item.inital_date?.includes(searchKeyword) ||
        item.final_edit_date?.includes(searchKeyword)
      )
        return item;
    }
  };

  return (
    <div>
      <TodoCreator itemId={itemList?.map(item => item.id)} />
      <div className="todoRetrieve">
        <div className="searchbox">
          <span className="searchLabel">검색하기: </span>
          <span>완료는 1 미완료는 0으로 검색해주세요😉</span>
          <input
            className="searchInput"
            onChange={handleSearchInput}
            placeholder="할 일을 검색해주세요"
          />
        </div>
        <div className="todoItem">
          {itemList
            ?.filter(item => filterSearch(item))
            .map((item, idx) => {
              return (
                <TodoItem
                  key={item.id}
                  todoInfo={item}
                  itemId={itemList?.map(item => item.id)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(TodoMain);
