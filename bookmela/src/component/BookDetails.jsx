import React, { useState } from "react";
import { Navbar, Nav, Container, Button, Card } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import data from "../book.json";
import { Link } from "react-router-dom";

function BookDetails() {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowDetails = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {data.allBooks.map((book) => (
            <div key={book.id}>
              {selectedBook === null ? (
                <div
                  style={{
                    width: "300px",
                    margin: "10px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundImage: `url(${book.coverImage})`,
                      backgroundSize: "cover",
                      borderRadius: "5px 5px 0 0",
                    }}
                  ></div>
                  <div
                    style={{
                      backgroundColor: "#f0f0f0",
                      padding: "10px",
                      borderRadius: "0 0 5px 5px",
                    }}
                  >
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      by {book.author}
                    </Card.Subtitle>
                    <Button
                      variant="success"
                      onClick={() => handleShowDetails(book)}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ) : (
                selectedBook.id === book.id && (
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "50%",
                        padding: "20px",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "5px",
                      }}
                    >
                      <h2>{selectedBook.title}</h2>
                      <p>{selectedBook.description}</p>
                      <p>Author: {selectedBook.author}</p>
                      <p>Reviews: {selectedBook.reviews}</p>
                      <p>Price: ${selectedBook.price}</p>
                      <p>Genre: {selectedBook.genre}</p>
                      <Button variant="secondary" onClick={handleCloseDetails}>
                        Back
                      </Button>
                    </div>
                    <div style={{ width: "50%" }}>
                      <img
                        src={selectedBook.coverImage}
                        alt={selectedBook.title}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "5px",
                          marginTop: "20px",
                        }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BookDetails;
