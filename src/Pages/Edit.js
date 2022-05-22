import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button  from "react-bootstrap/Button";
import Def from "../components/Def";
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export default function Edit() {

   let params = useParams();

   const navigate = useNavigate ();

  const [todo, setTodo] = useState({ });
const [editTodo, setEditTodo] = useState({})
  
// useEffect 
useEffect(() => { getEdit() }, []);  
 
// functions
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
    console.log(todo.todo_name)
    fetch(`http://localhost:3001/todos/${params.todo_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       
        todo_name: todo.todo_name,
        description: todo.description
      
      }),
    });
    navigate('/')
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
          // name='todo_name'
          placeholder={todo.todo_name}
          onChange={(e) => setTodo({...todo, todo_name:e.target.value})}
          // value={todo.todo_name}
        />
        <input
          type='text'
          
          placeholder={todo.description}
          onChange={(e) => setTodo({...todo, description:e.target.value})}
          // value={todo.description}
        />
        
        <input type='submit' value='Submit Changes' />
        
        <Link to='/'><Button variant="outline-primary">Return to ToDo List</Button></Link>
      </form>
      


        {/* <FloatingLabel controlId="floatingTextarea" label="Comments" className="mb-3">
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel> */}


      
      </div>








    </Def>
  );
}