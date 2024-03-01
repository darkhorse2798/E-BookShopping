import React from "react";
import { Navbar, Nav, Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import styles from "../Style/Nav.module.css";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom"; 
import "../Style/Card.css"

const HomePage = () => {

  return (
    <>
      <div className="content">
        <Navbar expand="lg" className={styles.navi}>
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Nav.Link as={Link} to="/">
                  <GiBookCover style={{ fontSize: "28px" }} />
                </Nav.Link>
                <Navbar.Brand as={Link} to="/">BookMela</Navbar.Brand>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/books">BookCatalog</Nav.Link>
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link as={Link} to="/profile">Login/SignUp</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <footer className="footer">
          <Container>
            <Row>
              <Col>
                <p style={{marginTop:"4px"}}>&copy; {new Date().getFullYear()} BookMela. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default HomePage;