import "./App.css";
import Main from "./Pages/Main";
import Header from "./components/Header";
import LowerMenu from "./components/LowerMenu";
import React, { useEffect, useState } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {

const [todo, setTodo] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/todo")
      .then((response) => response.json())
      .then((data) => {
        console.log("DATA", data);
        setTodo(data);
      })
      .catch((err) => {
        resizeBy.status(500).json(err);
        console.log(err)});
  }, []);
  
const handleTodo = (data ) => {
  setTodo(data)
}

  return (
    <div className="App">
      <div>
        <Header />

        <Main handleTodo={handleTodo}/>

        <LowerMenu />
      </div>
    </div>
  );
}

export default App;
