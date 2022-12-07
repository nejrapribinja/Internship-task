import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddPost(props) {
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState(localStorage.getItem("id"));

  const add = async (e) => {
    e.preventDefault();
    try {
      await fetch("/user/addPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, date, author }),
      });
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="text-center">Add post</Modal.Body>

      <Modal.Footer>
        <Form style={{ width: "35rem" }} onSubmit={add} className="text-center">
          <Form.Group className="mb-4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </Form.Group>

          <Button className="btn1" type="submit">
            Add post
          </Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
}

export default AddPost;
