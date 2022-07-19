import React from "react";
import Button from "react-bootstrap/Button";
import Def from "./Def";



export default function LowerMenu(): JSX.Element {
  return (
    <Def>
      <div>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            Edit
          </Button>
          <Button variant="success" size="lg">
            create
          </Button>
          <Button variant="danger" size="lg">
            Delete
          </Button>
        </div>
      </div>
    </Def>
  );
}
