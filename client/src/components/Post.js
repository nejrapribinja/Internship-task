import { Button, Card, Col } from "react-bootstrap";
import { BiCommentDetail } from "react-icons/bi";

const Post = (props) => {
  return (
    <Card className="text-center" style={{ width: "28rem", color: "black" }}>
      <Card.Header>{props.post.title}</Card.Header>
      <Card.Body>
        <Card.Link className="card-link">{props.post.description}</Card.Link>
      </Card.Body>
      <Card.Footer className="d-flex text-muted">
        <Col className="text-start">{props.post.dat}</Col>
        <Col className="text-end">
          {props.post.first_name} {props.post.last_name} | <BiCommentDetail /> 3
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default Post;
