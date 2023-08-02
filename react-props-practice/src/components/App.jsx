import React from "react";
import Contacts from "../contacts"
import Card from "./Card"


function App() {
  return (
    <div>
      {Contacts.map(contact => (
        <Card name={contact.name} img = {contact.imgURL} tel={contact.phone} email={contact.email}/>
      ))}
    </div>
   
  );
}

export default App;
