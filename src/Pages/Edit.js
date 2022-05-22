import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button  from "react-bootstrap/Button";
import Def from "../components/Def";
import { ButtonGroup } from "react-bootstrap";

export default function Edit() {
  let id = useLocation().pathname.substring(6); // works for postgres
 
  // useState
  const [todos, setTodos] = useState({
    todo_id: "",
    todo_name: "",
    description: "",
   
  });

  // functions


  const handleTodoSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/todos/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo_id: todos.todo_id,
        todo_name: todos.todo_name,
        description: todos.description,
      
      }),
    });
  };

  // jsx
  return (
    <Def>
      <div>
        <h1>Edit Todos</h1>

        <form
          onSubmit={handleTodoSubmit}
          style={{ display: "flex", flexDirection: "column", width: "250px" }}
        >
          <input
            type="text"
            placeholder="todo_name"
            name="todo_name"
            onChange={(e) => setTodos({ ...todos, todo_name: e.target.value })}
          />

          <input
            type="text"
            placeholder="description"
            name="description"
            onChange={(e) =>
              setTodos({ ...todos, description: e.target.value })
            }
          />

          <input type="submit" value="Edit Todo" />
        </form>
        <Link to="/"><Button>Return to Todo Page</Button></Link>
      </div>
    </Def>
  );
}