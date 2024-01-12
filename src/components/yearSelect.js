import { Col, Form } from "react-bootstrap";

const YearSelect = () => {
  return (
    <Col md={6}>
      {/*Année*/}
      <Form.Label>Année-Modèle</Form.Label>
      <Form.Control
        type="number"
        className="form-control"
        placeholder="Sélectionner"
        style={{ width: "60%" }}
        min="1900"
        max="2099"
        step="1"
        required
      />
    </Col>
  );
};

export default YearSelect;
