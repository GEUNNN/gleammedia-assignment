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
        item.item.toLowerCase().includes(searchKeyword.toLowerCase())
        // ||
        // item.ref_id.includes(searchKeyword)
      )
        console.log();
      // return item;
    }
  };

  //백엔드로 수정된 데이터 request (update)
  const handleEditBtn = () => {
    axios.post("http://localhost:8030/todo-list", {});
  };

  console.log("itemlist >>", itemList);
  console.log("search keyword >>", searchKeyword);

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
                <TodoItem
                  key={item.id}
                  todoInfo={item}
                  itemId={itemList?.map(item => item.id)}
                />
                {/* <button key={idx} onClick={handleEditStatus}>
                  수정하기
                </button> */}
              </div>
            );
          })}
        {/* {editStatus && <input onChange={handleEditInput} />}
        {editStatus && <button onClick={handleEditBtn}>업데이트</button>} */}
      </div>
    </div>
  );
}

export default React.memo(TodoMain);
