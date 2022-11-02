import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Identity from '../Identity/Identity';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
            <Identity />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Some page</Nav.Link>
            <Nav.Link href="#action2">Some other page</Nav.Link>
            <NavDropdown title="A dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Link 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Link 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success">Call to action</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}