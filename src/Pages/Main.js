import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Def from "../components/Def";




const Main= (props) =>  {
  let { todos } = props;
let todoList = todos.map((todos, i) => <ListGroup.Item action variant="success">{todos}</ListGroup.Item>)

  return (

  
   <Def> 
   <div>
      <h1>My To Do List </h1>

      <ListGroup>
        { todoList }
      </ListGroup>
    </div>
    </Def>
  );
}
export default Main