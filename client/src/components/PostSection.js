import React, { useState, useEffect } from "react";
import { Nav, NavLink, Col, Row, Navbar, Container, Table, Button } from "react-bootstrap";
import Post from "./Post";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await fetch("/getPosts");
      const jsonData = await response.json();

      setPosts(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container fluid style={{ paddingTop: "4rem", paddingBottom: "4rem" }} className="footer">
      <Row className="d-flex justify-content-center align-items-center text-center ">
        <Col md={4}>
          <p className="t3">Post</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center">
        {posts.map((post) => {
          return (
            <Col md={6} className="d-flex justify-content-center align-items-center text-center">
              <Post post={post} />
            </Col>
          );
        })}
      </Row>
      <Row className="d-flex justify-content-center align-items-center text-center ">
        <Col md={4}>
          <Button
            className="btn4 mt-5"
            onClick={auth ? () => navigate("/allPosts") : () => setModalShow(true)}>
            View more
          </Button>
          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </Col>
      </Row>
    </Container>
  );
};

export default PostSection;
