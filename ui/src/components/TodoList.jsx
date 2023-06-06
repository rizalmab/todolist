import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";

function TodoItem({ item }) {
  return <ListGroup.Item>{item}</ListGroup.Item>;
}

function TodoList() {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const fetchTodos = async () => {
      fetch('http://localhost:3000/todos').then(res => res.json()).then(data => {
        setTodos(data.data)
      })
    }
    
    fetchTodos()
  }, [])

  return (
    <ListGroup>
      {/* <TodoItem item={"Cras justo odio"} /> */}
      {todos.length > 0 && todos.map((t) => (<TodoItem item={t.description} key={t.id}/>))}
    </ListGroup>
  );
}

export default TodoList;
