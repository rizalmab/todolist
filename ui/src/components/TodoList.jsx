import ListGroup from "react-bootstrap/ListGroup";

function ListItem({ item }) {
  return <ListGroup.Item>{item}</ListGroup.Item>;
}

function TodoList() {
  return (
    <ListGroup>
      <ListItem item={"Cras justo odio"} />
    </ListGroup>
  );
}

export default TodoList;
