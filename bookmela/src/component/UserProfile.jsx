import React, { useState } from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { GiBookCover } from 'react-icons/gi';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import style from "../Style/Nav.module.css";

function UserProfile() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify({ email, password }));
    setIsLoggedIn(true);
    navigate('/');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData && userData.email === email && userData.password === password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Navbar
        style={{
          borderBottom: '1px solid #d7d7d7',
          backgroundColor: '#f0f0f0',
        }}
        expand="lg"
        className="navi"
      >
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                <GiBookCover style={{ fontSize: '28px' }} />
              </Nav.Link>
              <Navbar.Brand as={Link} to="/">
                BookMela
              </Navbar.Brand>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {isLoggedIn ? (
                <Button style={{ margin: "10px" }} variant="outline-primary" onClick={handleLogout}>
                  Logout
                </Button>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container>
        <h1 style={{ marginLeft: "350px", marginTop: "15px" }}>Welcome to <span style={{ color: "#1877F2" }}>BookMela !</span> </h1>
        <div className={style.userProfile}>
          <Form onSubmit={isLoggedIn ? handleLogout : handleLogin}>
            {!isLoggedIn && (
              <>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                {!isLoggedIn && (
                  <Button style={{ marginTop: "15px" }} variant="primary" type="submit" block="true">
                    Login
                  </Button>
                )}
              </>
            )}

            {!isLoggedIn && (
              <p className="mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            )}

            {isLoggedIn && <p>You are logged in as: {email}</p>}
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default UserProfile;
