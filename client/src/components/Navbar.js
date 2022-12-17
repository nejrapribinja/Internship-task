import React, { useState } from "react";
import { Nav, Col, Navbar, Container } from "react-bootstrap";
import { BiUser } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navigate = useNavigate();

  const logout = async () => {
    try {
      localStorage.clear("isAuth");
      await fetch("/logOut", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate(0);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Col className="d-flex">
            <Nav>
              <Nav.Link href="#">Shop</Nav.Link>
              <Nav.Link href="#">Our story</Nav.Link>
            </Nav>
          </Col>
          <Col className="text-center">
            <Navbar.Brand href="/" className="d-flex justify-content-center align-items-center">
              <h1>LOGO</h1>
            </Navbar.Brand>
          </Col>
          <Col>
            <Nav className="d-flex justify-content-end align-items-center text-end">
              <Nav.Link href="/login">Blog </Nav.Link>
              {auth ? (
                <>
                  <p> Hi, {user}</p> <MdLogout className="icon" onClick={logout} />
                </>
              ) : (
                <BiUser className="icon" onClick={() => setModalShow(true)} />
              )}
            </Nav>
          </Col>
        </Navbar.Collapse>
      </Container>
      <Login show={modalShow} onHide={() => setModalShow(false)} />
    </Navbar>
  );
};

export default Navigation;
