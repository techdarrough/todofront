import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button  from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Def from "../components/Def";






const Main = () => {
//user state
  const [todo, setTodo] = useState([])
  const [value, setValue] = useState(0)
//functions
  const getTodos = () => {
    
      fetch("http://localhost:3001/todos")
        .then((response) => response.json())
        .then((data) => {
          console.log("DATA", data);
          setTodo(data);
        })
        .catch((err) => {
          
          console.log(err)
        });
    };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    }).then((response) => response.json())
    .then((data) => {
      console.log("DATA", data);
      setValue(value + 1);
      console.log(value)
    
    })
    .catch((err) => {
      
      console.log(err)
    });;
  };


  // Use Effect 
  useEffect(() => getTodos(), [value]);  // only resuscribe if todo use state is updated
// handletodo state (if needed may comment out)
  const handleTodo = (data) => {
    setTodo(data)
  }

 
// map array into a table
  let todoList = todo.map(({ todo_id, todo_name, description }) => (

    
    <ListGroup horizontal>
      <ListGroup.Item key={todo_id}><Link to={`/edit/`}><Button variant="success"  >Edit</Button></Link></ListGroup.Item>

      <ListGroup.Item className="flex-fill" >
        {todo_name}<br/>{description}
      </ListGroup.Item>

      <ListGroup.Item ><Button variant="danger" 
      onClick={() => {
        deleteTodo(todo_id);
        
      }}
      >Delete</Button></ListGroup.Item>


    </ListGroup>



  ))

  return (


    <Def>
     
      <div>

        <h1>My To Do List </h1>
   
       <div>  {todoList} </div>
  
      </div>

    </Def>

  );
}
export default Main