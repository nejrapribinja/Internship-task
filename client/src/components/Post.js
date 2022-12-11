import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row, InputGroup, Form } from "react-bootstrap";
import { BiCommentDetail } from "react-icons/bi";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const comment = async (e) => {
    e.preventDefault();
    console.log("ok");
  };
  return (
    <Card className="text-center" style={{ width: "49rem", color: "black", margin: "2rem" }}>
      <Card.Header className="d-flex">
        <Col className="text-start">{props.post.dat}</Col>
        <Col className="text-end">
          {props.post.first_name} {props.post.last_name}
        </Col>
      </Card.Header>
      <Card.Body>
        <h5>{props.post.title}</h5>
        <Card.Link className="card-link">{props.post.description}</Card.Link>
      </Card.Body>
      <Card.Footer className="d-flex text-muted">
        <Col className="text-start">
          <BiCommentDetail /> 3
        </Col>
      </Card.Footer>

      <Row className="m-4">
        <Col>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control placeholder="Write comment" />
              <Button
                className="d-flex align-items-center btn2"
                onClick={auth ? comment : () => setModalShow(true)}>
                Comment
              </Button>
            </InputGroup>
          </Form>
        </Col>

        <Login show={modalShow} onHide={() => setModalShow(false)} />
      </Row>
    </Card>
  );
};

export default Post;
