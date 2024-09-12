import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import CardSec2 from "../CardSec2/CardSec2";
import { CiLocationOn } from "react-icons/ci";
import "./Section16.css";

export default function Section16({ dataSectio16 }) {
  return (
    <Container className="my-5 pt-5">
      <Row className="w-100 d-flex justify-content-center justify-content-lg-between ms-0">
        <Col xs={12} lg={6} className="mb-5 mb-lg-0 px-0 px-lg-2 px-xl-3">
          <Row className="mb-0">
            <CardSec2
              cardCal={{ xs: 12, md: 12, lg: 12 }}
              lkSec17Border={"lk-sec17-border"}
              icon={<CiLocationOn />}
              h2={"Address"}
              text={"A108 Adam Street,New York,Ny 535022"}
              lkClassName4={"text-center mb-4"}
            />
          </Row>
          <Row className="gap-4 gap-md-0">
            {dataSectio16.map((item, index) => {
              return (
                <CardSec2
                  key={index}
                  cardCal={{ xs: 12, md: 6, lg: 6 }}
                  lkSec17Border={"lk-sec17-border"}
                  icon={item.icon}
                  h2={item.h2}
                  text={item.text}
                  lkClassName4={"text-center"}
                />
              );
            })}
          </Row>
        </Col>
        <Col
          xs={12}
          lg={6}
          className="form-lk-border pb-5 pt-1 ms-0"
          style={{ height: "max-content" }}
        >
          <Row>
            <Input
              type={"text"}
              placeholder={"Your Name"}
              controlId={"formGridname"}
              inputCal={{ xs: 12, md: 6, lg: 6 }}
            />
            <Input
              type={"email"}
              placeholder={"Your Email"}
              controlId={"formGridemail"}
              inputCal={{ xs: 12, md: 6, lg: 6 }}
            />
          </Row>
          <Row className="mb-4">
            <Input
              type={"text"}
              placeholder={"Subject"}
              controlId={"formGridsubject"}
              inputCal={{ xs: 12, md: 12, lg: 12 }}
            />
          </Row>
          <Textarea rows={4} placeholder={"Message"} />
          <Row className="text-center mt-3 pt-2">
            <ButtonCommon dataButton={"Send Message"} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
