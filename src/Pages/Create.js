import React, { useState } from "react";
import { Link } from "react-router-dom";
import Def from "../components/Def";


const Create = () => { 
  // useState
  const [todo_name, setTodoName] = useState("");
  const [description, setDescription] = useState("");
  

  // functions
  const handleTodoSubmit = (e) => {
    (e).preventDefault();
    console.log(todo_name);
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo_name: todo_name,
        description: description
     
        
      })
    });

  };

  // jsx
  return (
      <Def>
    <div>
      <h1>Add New ToDo</h1>

      <form
        onSubmit={handleTodoSubmit} 
        style={{ display: "flex", flexDirection: "column", width: "250px" }}
      >
        <input
          type='text'
          name='todo_name'
          placeholder='todo_name'
          onChange={(e) => setTodoName(e.target.value)}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <input type='submit' value='Add ToDo' />
      </form>
      <Link to='/'>Return to ToDo Page</Link>
    </div>
    </Def>
  );
}

export default Create