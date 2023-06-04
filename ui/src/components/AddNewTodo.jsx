import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";

function AddNewTodo() {
  const [input, setInput] = useState(undefined);

  function handleSubmit() {
    console.log("Submitted!");
    // call DynamoDB
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Write down new todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </InputGroup>
    </>
  );
}

export default AddNewTodo;
