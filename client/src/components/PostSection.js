import React, { useState, useEffect } from "react";
import { Col, Row, Container, Button, Nav, Navbar } from "react-bootstrap";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
import { MdOutlineLibraryAdd, MdOutlineEdit } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import AddPost from "./userPrivate/AddPost";

const AllPosts = () => {
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
    <>
      <Container fluid>
        {auth ? (
          <Row className="d-flex justify-content-end align-items-center text-center pt-5">
            <Col md={4} className="d-flex justify-content-center">
              <MdOutlineLibraryAdd
                style={{ fontSize: "2rem", marginRight: "3rem", cursor: "pointer" }}
                onClick={() => setModalShow(true)}
              />
              <BiEdit
                style={{ fontSize: "2rem", cursor: "pointer" }}
                onClick={() => navigate("/editPost")}
              />

              <AddPost show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Row>
        ) : (
          <></>
        )}

        {posts.map((post) => {
          return (
            <Row className="d-flex justify-content-center align-items-center text-center mt-5">
              <Col md={12} className="d-flex justify-content-center align-items-center text-center">
                <Post post={post} />
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default AllPosts;
