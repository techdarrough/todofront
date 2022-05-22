import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button  from "react-bootstrap/Button";
import Def from "../components/Def";

export default function Edit() {
   let params = useParams();
   const navigate = useNavigate ();
  const [todo, setTodo] = useState({
    todo_id: "",
    todo_name: "",
    description: "",
  });
const [value, setValue] = useState(0)
  // functions
// useEffect 
useEffect(() => { getEdit() }, []);  
 

const getEdit = () => {

    fetch(`http://localhost:3001/todos/${params.todo_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setTodo(data);
      })
      .catch((err) => {

        console.log(err)
      });
  };

  

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    console.log(params.todo_id)
    fetch(`http://localhost:3001/todos/${params.todo_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       
        todo_name: todo.todo_name,
        description: todo.description
      
      }),
    });
    // navigate('/')
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
          type='text'
          name='todo_name'
          placeholder='todo_name'
          onChange={(e) => setTodo(e.target.value)}
          value={todo.todo_name}
        />
        <input
          type='text'
          name='description'
          placeholder='description'
          onChange={(e) => setTodo(e.target.value)}
          value={todo.description}
        />
        
        <input type='submit' value='Submit Changes' />
      </form>
      
      <Link to='/'><Button variant="outline-primary">Return to ToDo List</Button></Link>
      </div>








    </Def>
  );
}