import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
import Button  from "react-bootstrap/Button"
import Def from "../components/Def";
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'


const Create = () => { 
  // useState
  const [todo_name, setTodoName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate ();

  // functions
  const handleTodoSubmit = (e) => {
    (e).preventDefault();
    
    fetch("http://ec2-52-3-2-245.compute-1.amazonaws.com:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo_name: todo_name,
        description: description
     
        
      })
    });
    navigate('/');
  };

  // jsx
  return (
      <Def>
    <div>
      <h1>Add New ToDo</h1>

   


<Form onSubmit={handleTodoSubmit} >

        <FloatingLabel  
        controlId="floatingTextarea" 
        label="Todo name "
        className="mb-3"  >
          <Form.Control
          
           
          type='text'
          as="textarea" 
          //
          onChange={(e) => setTodoName(e.target.value)} />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
           type='text'
            as="textarea"
            onChange={(e) => setDescription(e.target.value)}
            style={{ height: '100px' }}
          />
          <Button variant="outline-success" type='submit' value='Add ToDo' >Create Todo</Button>

          <Link to='/'><Button variant="outline-primary">Return to ToDo List</Button></Link>

        </FloatingLabel>
        </Form>





    </div>
    </Def>
  );
}

export default Create