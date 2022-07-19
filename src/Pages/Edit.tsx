import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Def from "../components/Def";
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export default function Edit(): JSX.Element {

  let params = useParams();

  const navigate = useNavigate();

  interface Itodo {
    name: string;
    description:string
  }

  // const [todo, setTodo] = useState({});
  const [todo, setTodo] = useState<Itodo | any>()
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



  function handleTodoSubmit(e: any): void {
    e.preventDefault();
    console.log(todo.todo_name);
    fetch(`http://localhost:3001/todos/${params.todo_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo_name: todo.todo_name,
        description: todo.description
      }),
    });
    navigate('/');
  }


  // jsx
  return (
    <Def>
      <div>
        <h1>Edit Todos</h1>

        <Form onSubmit={handleTodoSubmit} >

          <FloatingLabel
            controlId="floatingTextarea"
            label={todo.todo_name}
            className="mb-3"  >
            <Form.Control


              type='text'
              as="textarea"
              //
              onChange={(e) => setTodo({ ...todo, todo_name: e.target.value })} />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label={todo.description}>
            <Form.Control
              type='text'
              as="textarea"
              onChange={(e) => setTodo({ ...todo, description: e.target.value })}
              style={{ height: '100px' }}
            />
            <Button variant="outline-success" type='submit' value='Submit Changes' >Submit Edits</Button>

            <Link to='/'><Button variant="outline-primary">Return to ToDo List</Button></Link>

          </FloatingLabel>

        </Form>



      </div>








    </Def>
  );
}