import Form from "react-bootstrap/Form";

const DescriptionArea = () => {
  return (
    <Form.Group>
      <Form.Label style={{fontSize: "20px"}}>Texte de l'annonce</Form.Label>
      <Form.Control as="textarea" rows={6} required/>
    </Form.Group>
  );
};

export default DescriptionArea;
