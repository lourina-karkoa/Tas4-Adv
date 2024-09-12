import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CardSection2.css";
import CardSec2 from "../CardSec2/CardSec2";

export default function CardSection2({ dataCardSec2,className1,className2,className3}) {
  return (
    <Container
      className="mt-5"
      id="about">
        <Row className="mb-4 pb-2">
        {dataCardSec2.map((item, index) => {
        return (
        <CardSec2 key={index} cardCal={{xs:12, md:6, lg:3}} icon={item.icon} h2={item.h2} text={item.text} className1={className1} className2={className2} className3={className3}/>
        );
      })}
        </Row>    
    </Container>
  );
}
