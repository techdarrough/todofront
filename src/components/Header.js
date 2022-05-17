import React from "react";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <div>
      <div>
        <Nav justify variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">ToDoList</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Calendar</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}
