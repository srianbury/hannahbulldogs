import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

// Basic component to display and remove item
const EditImage = ({ src, alt, handleRemove }) => (
  <Card>
    <Card.Header className="text-right">
      <Button
        onClick={() => handleRemove(src)}
        variant="link"
        className="p-0 text-danger"
      >
        Delete
      </Button>
    </Card.Header>
    <Card.Img variant="bottom" src={src} alt={alt} />
  </Card>
);

const EditLitterImage = ({
  src,
  alt,
  handleRemove,
  homepageIsChecked,
  handleShow,
}) => (
  <Card>
    <Card.Header className="text-right">
      <Button
        onClick={() => handleRemove(src)}
        variant="link"
        className="p-0 text-danger"
      >
        Delete
      </Button>
    </Card.Header>
    <Card.Img variant="bottom" src={src} alt={alt} />
    <Card.Body className="p-1 m-0">
      <Form.Group controlId="showOnHp">
        <Form.Check
          checked={homepageIsChecked(src)}
          onChange={() => handleShow(src)}
          type="checkbox"
          label="Show on homepage?"
        />
      </Form.Group>
    </Card.Body>
  </Card>
);

export { EditImage, EditLitterImage };
