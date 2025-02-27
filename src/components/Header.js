import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <div>
      <div>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">ToDoList</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav.Item>
               </Nav>
      </div>
    </div>
  );
}
