import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Row, Col } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";

import "../Style/Nav.module.css";
import "../Style/HomePage.css";
import { PiShoppingCartFill } from "react-icons/pi";

const HomePage = () => {
  const [showBestsellers, setShowBestsellers] = useState(false);

  const toggleBestsellers = () => {
    setShowBestsellers(!showBestsellers);
  };

  return (
    <>
      <div className="content">
        <Navbar
          style={{
            // backgroundColor: "#f7efef",
            borderBottom: "1px solid #d7d7d7",
            backgroundColor: " #f0f0f0",
          }}
          expand="lg"
          className="navi"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
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
              <div className="Container d-flex">
                <Nav.Link className="mx-4" as={Link} to="/profile">
                  Login/SignUp
                </Nav.Link>
                <Nav.Link as={Link} to="/cart">
                  <PiShoppingCartFill style={{ fontSize: "24px" }} />
                  AddToCart
                </Nav.Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="hero-section">
          <Container>
            <Row>
              <Col md={6} className="text-center text-md-start">
                <h1>Welcome to BookMela</h1>
                <p>
                  Discover your next favorite book from our vast collection!
                </p>
                <Button 
                  as={Link}
                  to="/books"
                  variant="secondary"
                  style={{margin:"auto" ,fontSize:"16px"}}
                  onClick={toggleBestsellers}
                >
                  Explore Books
                </Button>
              </Col>
              <Col
                md={6}
                className="d-flex align-items-center justify-content-center"
              >
                <img
                  style={{
                    height: "50vh",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Books"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </section>
        {showBestsellers && <section className="bestsellers-section"></section>}
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
    </>
  );
};

export default HomePage;
