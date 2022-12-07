import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EditPost(props) {
  const [auth, setAuth] = useState(localStorage.getItem("isAuth"));
  const navigate = useNavigate();
  const [title, setTitle] = useState(props.post.title);
  const [description, setDescription] = useState(props.post.description);
  const [date, setDate] = useState(props.post.dat);
  const [postID, setPostID] = useState(props.post.id);

  const edit = async (e) => {
    e.preventDefault();
    try {
      await fetch("/user/editPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description, date, postID }),
      });
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="text-center">Edit post</Modal.Body>

      <Modal.Footer>
        <Form style={{ width: "35rem" }} onSubmit={edit} className="text-center">
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
            Edit post
          </Button>
        </Form>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPost;
