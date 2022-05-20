import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Def from "../components/Def";




const Main = (props) => {

  const [todo, setTodo] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setTodo(data);
      })
      .catch((err) => {
        res.status(500).json(err);
        console.log(err)
      });
  }, []);

  const handleTodo = (data) => {
    setTodo(data)
  }

 
// map array into a table
  let todoList = todo.map(({ todo_id, todo_name, description }) => (
    <ListGroup.Item key={todo_id} >{todo_name}:{description}</ListGroup.Item>
  ))

  return (


    <Def>
      <div>
        <h1>My To Do List </h1>

        <ListGroup >
          {todoList}
        </ListGroup>
      </div>
    </Def>
  );
}
export default Main