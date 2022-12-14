import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row, InputGroup, Form } from "react-bootstrap";
import { BiCommentDetail } from "react-icons/bi";
import Login from "./Login";

const Post = (props) => {
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [modalShow, setModalShow] = useState(false);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState(localStorage.getItem("id"));
  const [postID, setPostID] = useState(props.post.id);

  const comment = async (e) => {
    e.preventDefault();
    try {
      await fetch("/user/addComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, author, postID }),
      });
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
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
          {props.comments
            .filter((comment) => comment.post_id == props.post.post_id)
            .map((filteredComment) => (
              <p>{filteredComment.text_comment}</p>
            ))}
        </Col>
      </Row>

      <Row className="m-4">
        <Col>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                placeholder="Write comment"
                name="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
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
