import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./Section3.css";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

export default function Section3({ dataSec3 }) {
  return (
    <Container fluid>
      <Row className="btn-nav text-center d-flex align-items-center flex-column text-white py-5 ">
        <h2 className="pb-2">{dataSec3.h2}</h2>
        <p className="pb-2 w-75 fs-6">{dataSec3.p}</p>
        <div className="w-75">
          <ButtonCommon dataButton={`${dataSec3.btn}`} border={"border-2"} />
        </div>
      </Row>
    </Container>
  );
}
//dataSec3.btn
