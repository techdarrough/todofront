import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
export default function Main() {
  return (
    <div>
      <h1>My To Do List </h1>

      <ListGroup>
        <ListGroup.Item action variant="secondary">
          School Work
        </ListGroup.Item>
        <ListGroup.Item action variant="success">
          Success Interview
        </ListGroup.Item>
        <ListGroup.Item action variant="danger">
          Danger Meeting
        </ListGroup.Item>
        <ListGroup.Item action variant="warning">
          Warnings Day and night
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          Info on next project
        </ListGroup.Item>
        <ListGroup.Item action variant="light">
          Light inside out
        </ListGroup.Item>
        <ListGroup.Item action variant="dark">
          Dark forever
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
