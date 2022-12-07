import { Row, Col, Container, InputGroup, FormControl, Form, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Row
          className="d-flex justify-content-center align-items-end "
          style={{ paddingTop: "2rem" }}>
          <Col md={5} className="justify-content-start align-items-center">
            <p className="t3">NEVER MISS A DROP.</p>
            <p className="t4">
              Sign up to be the first to know about exclusive
              <br /> new deals, product launches and more.
            </p>
          </Col>
          <Col md={7} className="text-end">
            <Form className="d-flex">
              <InputGroup>
                <Form.Control placeholder="Enter your email address" className="inp" />
                <Button className="d-flex align-items-center btn2">Sign up</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <br />
        <hr />
        <Row
          className="d-flex justify-content-center align-items-top text-center"
          style={{ paddingTop: "2rem" }}>
          <Col md={4} className="text-start">
            <p className="pt-5">
              <b>We’re here to help.</b>
              <br /> service@espro.com <br />
              1.844.377.7622
            </p>
          </Col>
          <Col md={2} className="text-start">
            <h6>Learn</h6>
            <p>
              Blog
              <br /> Our Story
              <br /> Brew Guides
              <br /> Retailers
            </p>
          </Col>
          <Col md={2} className="text-start">
            <h6>Support</h6>
            <p>
              FAQ
              <br /> Shipping & Returns
              <br /> Our Guarantee
            </p>
          </Col>
          <Col md={2} className="text-start">
            <h6>Company</h6>
            <p>
              Contact
              <br /> Join Us
              <br /> Press
            </p>
          </Col>
          <Col md={2} className="text-end">
            <h6>Connect with us</h6>
            <BsFacebook style={{ margin: "0.7rem", fontSize: "1.3rem" }} />{" "}
            <BsInstagram style={{ margin: "0.7rem", fontSize: "1.3rem" }} />{" "}
            <BsTwitter style={{ margin: "0.7rem", fontSize: "1.3rem" }} />
          </Col>
        </Row>
        <Row style={{ paddingTop: "4rem", paddingBottom: "1.5rem" }}>
          <Col md={6} className="text-start">
            <p>Copyright © 2021 Espro Inc.</p>
          </Col>
          <Col md={6} className="text-end">
            <p>Terms & Privacy</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
