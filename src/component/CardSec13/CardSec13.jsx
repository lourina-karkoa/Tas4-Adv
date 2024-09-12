import React from "react";
import { Card, ListGroup, Row } from "react-bootstrap";
import "./CardSec13.css";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

export default function CardSec13({header,price,sup,span1,cal,lin1,lin2,span2,btn,li1,li2,li3,li4,li5,bgCommon}) {
  return (
    <Card
      style={{ width: "16rem" }}
      className="text-center border border-0 mb-4 mb-xl position-relative"
    >
      <Card.Header className={`text-center border border-0 py-3 ${(bgCommon != 'undefined') ? 'btn-nav text-white' : 'bg-sec9'}`}>
        {header}
      </Card.Header>
      <Row className={`lk-mark position-absolute text-white btn-nav top-0 d-flex justify-content-center align-items-center ${(price != 'undefined') ? 'd-block' : 'd-none'}`}><p className="ms-4 mb-3  me-1">{price}</p></Row>
      <Card.Body className="lkborder-color p-2">
        <Card.Text className="text-nav">
          <span className="fs-1 fw-semibold">
            <sup>{sup}</sup>
            {span1}
          </span>
          <span className="opacity-75">{span2}</span>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush lkborder-color pb-4">
        <ListGroup.Item className="text-nav border border-0 pb-0">
          {li1}
        </ListGroup.Item>
        <ListGroup.Item className="text-nav border border-0 pb-0">
          {li2}
        </ListGroup.Item>
        <ListGroup.Item className="text-nav border border-0 pb-0">
          {li3}
        </ListGroup.Item>
        <ListGroup.Item className={`text-nav border border-0 pb-0 ${(lin2)? lin2 :''}`}>
          {li4}
        </ListGroup.Item>
        <ListGroup.Item className={`text-nav border border-0 ${(cal)? cal :''} ${(lin1)? lin1 :''}` }>
          {li5}
        </ListGroup.Item>
      </ListGroup>
      <Card.Header className="text-center border border-0 py-3 bg-sec9">
        <ButtonCommon dataButton={`${btn}`} />
      </Card.Header>
    </Card>
  );
}
