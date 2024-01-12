import { useState } from "react";
import { Col, Form } from "react-bootstrap";

const Brand = ({ onSubmit }) => {
  const [isValid, setIsValid] = useState(false);

  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setIsValid(selectedBrand !== "0");
    onSubmit(selectedBrand);
  };

  return (
    <Col md={6}>
      <Form.Label>Marque</Form.Label>
      <Form.Select
        style={{ width: "60%" }}
        required
        isValid={isValid}
        onChange={handleBrandChange}
      >
        {/*Marque*/}
        <option value="0">Sélectionner</option>
        <option value="1">Toyota</option>
        <option value="2">Peugeot</option>
        <option value="3">Citroen</option>
        <option value="4">Opel</option>-
      </Form.Select>
    </Col>
  );
};

export default Brand;
