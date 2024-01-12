import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const SelectButton = ({ name, fields }) => {
  const [selectedField, setSelectedField] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedField(index);
  };

  return (
    <Form.Group>
      <Form.Label>{name}</Form.Label>
      <Row>
        {fields.map((fuel, index) => (
          <Button
            variant={
              selectedField === index + 1 ? "success" : "outline-success"
            }
            className="fit"
            key={index + 1}
            onClick={() => handleButtonClick(index + 1)}
          >
            {fuel}
          </Button>
        ))}
        {!selectedField && (
          <p style={{ color: "red", fontSize: "10px" }}>
            Ce champs doit être renseigné
          </p>
        )}
      </Row>
    </Form.Group>
  );
};

export default SelectButton;
