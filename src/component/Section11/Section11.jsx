import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import CardSec11 from "../CardSec11/CardSec11";

export default function Section11({sec11}) {
  return (
    <div className="bg-Sec8 pt-5 my-5 pb-5">
      <Container>
        <div className="text-center">
          <Title classNameSection4={"position-absolute top-100 start-50 translate-middle pt-5"}title={{h2: "Doctors",p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",}}/>
        </div>
        <Row className="justify-content-sm-between justify-content-center gap-3 pt-5">
        {sec11.map((item, index) => {
          return (
            <CardSec11 as={Col} xs={12} lg={6} xl={3}
              key={index}
              sec11={{
                img: `${item.img}`,
                title: `${item.title}`,
                text: `${item.text}`,
              }}/>
          );
        })}
        </Row>
      </Container>
    </div>
  );
}
