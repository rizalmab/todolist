import ListGroup from "react-bootstrap/ListGroup";
import { useEffect } from "react";

function ListItem({ item }) {
  return <ListGroup.Item>{item}</ListGroup.Item>;
}

function TodoList() {
  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch('http://localhost:3000/todos')
      return response.data
    }

    const todos = fetchTodos()
    console.log(todos)
  }, [])

  return (
    <ListGroup>
      <ListItem item={"Cras justo odio"} />
    </ListGroup>
  );
}

export default TodoList;
