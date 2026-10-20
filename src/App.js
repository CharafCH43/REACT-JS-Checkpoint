import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Card,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">My React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="py-5">
          <h1 className="text-center mb-4">Welcome to My React App</h1>

          <p className="text-center text-muted mb-5">
            My first contact with React and React-Bootstrap.
          </p>

          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>
                    React is a JavaScript library for building user interfaces.
                  </Card.Text>
                  <Button variant="primary" href="https://react.dev/">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>React-Bootstrap</Card.Title>
                  <Card.Text>
                    React-Bootstrap provides reusable Bootstrap components for
                    React applications.
                  </Card.Text>
                  <Button
                    variant="success"
                    href="https://react-bootstrap.github.io/"
                  >
                    Discover
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>JavaScript ES6</Card.Title>
                  <Card.Text>
                    ES6 introduces modern JavaScript features such as arrow
                    functions and modules.
                  </Card.Text>
                  <Button
                    variant="warning"
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  >
                    Explore
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
