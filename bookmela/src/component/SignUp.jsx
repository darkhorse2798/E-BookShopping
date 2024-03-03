import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { GiBookCover } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import style from "../Style/Nav.module.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { emailOrPhone, password } = formData;
    if (!emailOrPhone || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Check if user already exists in localStorage
    const existingUserData = JSON.parse(localStorage.getItem("user")) || [];

    // Check if user with same email or phone already exists
    const isExistingUser = existingUserData.some(
      (user) => user.emailOrPhone === emailOrPhone
    );

    if (isExistingUser) {
      alert("User with this email or phone already exists");
      return;
    }

    // Add new user to localStorage
    const updatedUserData = [...existingUserData, formData];
    localStorage.setItem("user", JSON.stringify(updatedUserData));

    // Redirect to profile page after successful signup
    navigate("/login");
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <h1 style={{ marginLeft: "450px", marginTop: "15px" }}>
        Welcome to <span style={{ color: "#1877F2" }}>BookMela !</span>{" "}
      </h1>
      <Container>
        <div className={style.SignUp}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmailOrPhone">
              <Form.Label>Email address or Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email or phone"
                name="emailOrPhone"
                value={formData.emailOrPhone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              style={{ marginTop: "15px" }}
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default SignUp;
