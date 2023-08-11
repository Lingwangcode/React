import React, {useState} from "react";

function CreateArea(props) {

  const[noteTitle, setNoteTitle] = useState("");
  const[noteContent, setNoteContent] = useState("")
  

  function handleInputChange(){
    const titleText = event.target.value;
    setNoteTitle(titleText);
  }

  function handleContentChange(){
    const contentText = event.target.value;
    setNoteContent(contentText);
  }


  return (
    <div>
      <form >
        <input onChange={handleInputChange} name="title" placeholder="Title" value={noteTitle} />
        <textarea onChange={handleContentChange} name="content" placeholder="Take a note..." rows="3" value={noteContent} />
        <button onClick={()=>{props.click(noteTitle, noteContent)}}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
