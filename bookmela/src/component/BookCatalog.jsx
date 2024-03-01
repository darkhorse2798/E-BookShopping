import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Card, Row, Col } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../Style/Nav.module.css";
import "../Style/Card.css";
import Library from "../book.json";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(Library.allBooks);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar expand="lg" className={styles.navi}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link as={Link} to="/">
                <GiBookCover style={{ fontSize: "28px" }} />
              </Nav.Link>
              <Navbar.Brand as={Link} to="/">BookMela</Navbar.Brand>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="content">
        <Container className="mt-4">
          <Row className="mb-4">
            <Col>
              <Slider {...settings}>
                {books.slice(0, Math.ceil(books.length / 2)).map((book, index) => (
                  <div key={index}>
                    <Card className="custom-card">
                      <Card.Img variant="top" src={book.coverImage} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                        <Card.Text>{book.description}</Card.Text>
                        <Card.Text>{book.reviews}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
          <Row>
            <Col>
              <Slider {...settings}>
                {books.slice(Math.ceil(books.length / 2)).map((book, index) => (
                  <div key={index}>
                    <Card className="custom-card">
                      <Card.Img variant="top" src={book.coverImage} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                        <Card.Text>{book.description}</Card.Text>
                        <Card.Text>{book.reviews}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
        <footer className="footer">
          <Container>
            <Row>
              <Col>
                <p style={{ marginTop: "4px" }}>&copy; {new Date().getFullYear()} BookMela. All Rights Reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  );
};

export default BookCatalog;
