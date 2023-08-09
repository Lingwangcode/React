import React, {useState} from "react";

function Li(props){

    const[isDone, setIsDone] = useState(false);

    function checkStatus(){
        setIsDone((prevValue)=>{
            return !prevValue
        })
    }

    return <li onClick={checkStatus} style={{textDecoration: isDone ? "line-through" : "none"}}>{props.item}</li>
}

export default Li;