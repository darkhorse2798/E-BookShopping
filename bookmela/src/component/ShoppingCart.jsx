import React, { useState } from "react";
import { Navbar, Nav, Container, Row, Col, Button } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";
import styles from "../Style/Nav.module.css";

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <Navbar
        style={{
          borderBottom: "1px solid #d7d7d7",
          backgroundColor: "#f0f0f0",
        }}
        expand="lg"
        className="navi"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                <GiBookCover style={{ fontSize: "28px" }} />
              </Nav.Link>
              <Navbar.Brand as={Link} to="/">
                BookMela
              </Navbar.Brand>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/books">
                BookCatalog
              </Nav.Link>
              <Nav.Link as={Link} to="/booksDetails/:id">
                BookDetails
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <h2>Your Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <Button variant="danger" onClick={() => removeFromCart(index)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        )}
      </Container>
      <footer className="footer">
        <Container>
          <Row>
            <Col>
              <p>
                &copy; {new Date().getFullYear()} BookMela. All Rights
                Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default ShoppingCart;
