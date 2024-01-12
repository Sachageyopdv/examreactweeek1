import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";

const MultiSelectButton = ({ name, fields, desc }) => {
  const [selectedFields, setSelectedFields] = useState([]);

  const handleButtonClick = (index) => {
    setSelectedFields((prevState) => {
      const newSelectedFields = prevState.includes(index)
        ? prevState.filter((field) => field !== index)
        : [...prevState, index];
      return newSelectedFields;
    });
  };
  return (
    <>
      <Form.Group>
        <h2>{name}</h2>
        <figure>{desc}</figure>
        <Row>
          {fields.map((field, index) => (
            <Button
              className="fit"
              key={index}
              onClick={() => handleButtonClick(index)}
              variant={
                selectedFields.includes(index) ? "success" : "outline-success"
              }
            >
              {field}
            </Button>
          ))}
        </Row>
      </Form.Group>
    </>
  );
};

export default MultiSelectButton;
