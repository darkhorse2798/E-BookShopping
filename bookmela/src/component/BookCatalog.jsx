import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Card, Button, Modal, Row, Col } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Library from "../book.json";
import styles from "../Style/Nav.module.css";
import "../Style/Card.css";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cartItems, setCartItems] = useState([]); 
  
  useEffect(() => {
    setBooks(Library.allBooks);
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleShowAllBooks = () => {
    setSelectedGenre(""); 
  };

  const handleBuyNow = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  // Function to add item to the shopping cart
  const addToCart = (book) => {
    setCartItems([...cartItems, book]);
    setShowModal(false);
  };

  const filteredBooks = selectedGenre ? books.filter(book => book.genre === selectedGenre) : books;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
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
              <Button variant="outline-primary" onClick={handleShowAllBooks}>All Books</Button>
            </Nav>
            <Nav>
              {["Fiction", "Non-Fiction", "Sci-Fi", "Fantasy"].map((genre, index) => (
                <Button 
                  key={index}
                  variant="outline-primary"
                  className="me-2"
                  onClick={() => handleGenreChange(genre)}
                >
                  {genre}
                </Button>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Slider {...settings}>
          {filteredBooks.map((book, index) => (
            <div key={index} className="slider-item">
              <Card className="custom-card">
                <Card.Img variant="top" src={book.coverImage} className="card-image" />
                <Card.Body>
                  <Card.Title className="card-title">{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                  <Card.Text className="card-reviews">{book.reviews}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Price: ${book.price}</p>
                    <Button variant="primary" onClick={() => handleBuyNow(book)}>Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Buy Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are about to purchase {selectedBook && selectedBook.title}. Proceed with payment?</p>
          <p>Price: ${selectedBook && selectedBook.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => addToCart(selectedBook)}>Pay Now</Button>
        </Modal.Footer>
      </Modal>
      <ShoppingCart cartItems={cartItems} />
    </>
  );
};

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart mt-4">
      <Container>
        <h2>Shopping Cart</h2>
        {cartItems.map((item, index) => (
          <Row key={index} className="cart-item mb-2">
            <Col xs={8}>
              <p>{item.title}</p>
            </Col>
            <Col xs={4} className="d-flex justify-content-end align-items-center">
              <p>${item.price}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default BookCatalog;
