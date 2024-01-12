import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import SelectButton from "./selectButton";
import Brand from "./brand";
import YearSelect from "./yearSelect";
import NumberSelect from "./numberSelect";
import { useState } from "react";
import DescriptionArea from "./descriptionArea";
import MultiSelectButton from "./MultiSelectButton";

const Carform = () => {
  const [formData, setFormData] = useState([]);

  const handleBrandChange = (brand) => {
    setFormData((prevState) => ({ ...prevState, brand }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form style={{ padding: "" }} onSubmit={handleSubmit}>
      <Form.Group>
        <h2>Détails de l'annonce</h2>
        <figure>
          Ajouter plus de détail sur votre annonce pour un maximum de visibilité
        </figure>
        {/*Année et marque*/}
        <Row className="selectRow">
          <Brand onSubmit={handleBrandChange} />
          <YearSelect />
        </Row>
      </Form.Group>
      <Form.Group>
        {/*Kilométrage et Puissance*/}
        <Row className="selectRow">
          <NumberSelect name="Kilométrage" />
          <NumberSelect name="Puissance" />
        </Row>
      </Form.Group>
      <SelectButton
        fields={["Diésel", "Essence", "Electrique", "LPG", "Hybride"]}
        name={"Type de carburant"}
      />
      <SelectButton
        fields={["Automatique", "Manuelle"]}
        name={"Boîte de vitesse"}
      />
      <SelectButton
        fields={[
          "Excellent",
          "Trés bon",
          "Bon",
          "Correct",
          "Endommagé",
          "Pour Pièces",
          "Neuf",
        ]}
        name={"État"}
      />
      <SelectButton
        fields={[
          "Dédouanée",
          "Pas encore dédouanée",
          "WW au Maroc",
          "Importé neuve",
        ]}
        name={"Origine"}
      />
      <SelectButton fields={[3, 5]} name={"Nombre de portes"} />
      <SelectButton fields={["Oui", "Non"]} name={"Première Main"} />
      <h2>Information de l'annonce</h2>
      <figure>
        Une annonce avec un prix exact et un description bien détaillé a 10 fois
        plus de visibilité
      </figure>
      <Form.Label>Prix</Form.Label>
      <Form.Control
        type="number"
        className="form-control"
        style={{ width: "60%" }}
        prefix="€"
      />
      <Form.Label>Titre de l'annonce</Form.Label>
      <Form.Control
        className="form-control"
        style={{ width: "60%" }}
        required
      />
      <DescriptionArea />
      <MultiSelectButton
        name="Plus de détails"
        fields={[
          "Jantes aliminium",
          "Airbags",
          "Climatisation",
          "Système de Navigation",
          "Toit ouvrant",
          "Sièges cuir",
          "Radar de recul",
          "Caméra de recul",
          "Vitres Electriques",
          "ABS",
          "ESP",
        ]}
        desc="Ajouter des détails suplémentaire"
      />
      <Button className="fit " type="submit">
        SUBMIT
      </Button>
    </Form>
  );
};

export default Carform;
