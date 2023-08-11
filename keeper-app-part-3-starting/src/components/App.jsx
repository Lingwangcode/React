import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const notes=[{}];
function buttenHandel(title, content){
    console.log(title)
    console.log(content)
    const note ={"title": title, "content":content}
    notes.push(note);
    console.log(notes)
    event.preventDefault();
}
  return (
    <div>
      <Header />
      <CreateArea click={buttenHandel}/>
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
