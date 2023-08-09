import React, { useState } from "react";
import Li from "./Li";

function App() {

  const[item, setItem] = useState("");
  const[itemList, setItemOnList] = useState([]);

  function changeHandle(event) {
    const inputText = event.target.value;
    setItem(inputText);
  }

  function addToList(){
    setItemOnList((prevItems)=>{
      return[...prevItems, item]
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={changeHandle} type="text" value={item} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map(item=> <Li item={item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
