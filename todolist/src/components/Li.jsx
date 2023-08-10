import React, {useState} from "react";

function Li(props){

    // const[isDone, setIsDone] = useState(false);

    // function checkStatus(){
    //     setIsDone((prevValue)=>{
    //         return !prevValue
    //     })
    // }

    return <li onClick={()=>props.onClick(props.id)}>{props.item}</li>
}

export default Li;