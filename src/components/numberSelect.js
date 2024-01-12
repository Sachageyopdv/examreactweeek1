import { Col, Form } from "react-bootstrap";

const NumberSelect = ({ name }, required) => {
  return (
    <Col md={6}>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        type="number"
        style={{ width: "60%" }}
        placeholder="Sélectionner"
        required
      ></Form.Control>
    </Col>
  );
};

export default NumberSelect;
