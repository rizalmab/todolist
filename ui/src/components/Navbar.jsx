import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Todo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link>Sign up</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Login</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
