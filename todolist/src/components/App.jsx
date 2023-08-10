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
    setItem("")
  }

  function deleteItem(id){
    //console.log("delete function")
    
    setItemOnList((previtems)=>
      (previtems.filter((item, index) => {return index !== id}))
    )
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
          {itemList.map((item, index)=> <Li key={index} id={index} onClick={deleteItem} item={item}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
