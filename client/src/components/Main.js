import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import Navigation from "./Navbar";

const Main = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center text-center">
        <Col md={12} className="d-flex justify-content-center align-items-center text">
          <p style={{ padding: "0.5rem" }}>FREE SHIPPING ON ALL U.S. ORDERS $49+</p>
        </Col>
      </Row>
      <div className="homep">
        <Navigation />
      </div>
    </Container>
  );
};

export default Main;
