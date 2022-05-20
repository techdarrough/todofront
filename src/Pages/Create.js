import React, { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => { 
  // useState
  const [todo_name, setTodoName] = useState("");
  const [description, setDescription] = useState("");
  

  // functions
  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo_name: "",
        description: ""
     
        
      }),
    });
  };

  // jsx
  return (
    <div>
      <h1>Add New ToDo</h1>
      <form
        onSubmit={handleSubmit}
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
  );
}
