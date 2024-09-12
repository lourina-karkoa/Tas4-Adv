import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import "./Section7.css";

export default function Section7({ dataSection7Part1, dataSection7Part2 }) {
  return (
    <Container className="mt-5">
      <div className="text-center">
        <Title
          classNameSection4={
            "position-absolute top-100 start-50 translate-middle pt-5"
          }
          title={{
            h2: "Services",
            p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
          }}
        />
      </div>
      <Row className="mt-5">
        {dataSection7Part1.map((item, index) => {
          return (
            <Col key={index} xs={12} md={12} lg={4} className="text-center">
              <div className="lk-sec7-w d-flex justify-content-center align-items-center rounded-circle bg-white mx-auto mb-3">
                <div>{item.icon}</div>
              </div>
              <Title
                title={{ h2: `${item.title.h2}`, p: `${item.title.p}` }}
                classNameSection4={
                  "position-absolute top-100 start-50 translate-middle pt-5"
                }
                size={"fs-4"}
              />
            </Col>
          );
        })}
      </Row>
      <Row className="mt-5">
        {dataSection7Part2.map((item, index) => {
          return (
            <Col key={index} xs={12} md={12} lg={4} className="text-center">
              <div className="lk-sec7-w d-flex justify-content-center align-items-center rounded-circle bg-white mx-auto mb-3">
                <div>{item.icon}</div>
              </div>
              <Title
                title={{ h2: `${item.title.h2}`, p: `${item.title.p}` }}
                classNameSection4={
                  "position-absolute top-100 start-50 translate-middle pt-5"
                }
                size={"fs-4"}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
