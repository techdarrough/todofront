import React from "react";
import Button from "react-bootstrap/Button";
import Def from "./Def";

export default function LowerMenu() {
  return (
    <div>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Edit
        </Button>
        <Button variant="secondary" size="lg">
          Delete
        </Button>
      </div>
    </div>
  );
}
