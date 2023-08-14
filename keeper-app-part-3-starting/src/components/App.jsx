import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [notes, setNotes]=useState([]);

function buttenHandel(event, title, content){
  event.preventDefault();
    //console.log(title)
    //console.log(content)
    const note ={"title": title, "content":content}
    setNotes((prevNotes)=>[...prevNotes, note]);
    //console.log(notes) 
   
}

function deleteNote(id){

 setNotes((prevNotes)=>{return prevNotes.filter((note, index)=>{return (index!==id)})})


}
  return (
    <div>
      <Header />
      <CreateArea click={buttenHandel}/>
      {notes.map((note, index)=> (<Note key={index} id={index} title={note.title} content={note.content} deleteButten={deleteNote} />))}
      <Footer />
    </div>
  );
}

export default App;
