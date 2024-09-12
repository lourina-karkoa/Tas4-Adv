import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Title from "../Title/Title";
import "./Section8.css";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";


export default function Section8({dataFormF,dataFormS,dataDate,dataFinaly,}) {
  return (
    <div className="bg-Sec8 pt-3 my-5 pb-5 ">
      <Container className="mt-5">
        <div className="text-center">
          <Title
            classNameSection4={
              "position-absolute top-100 start-50 translate-middle pt-5"
            }
            title={{
              h2: "Make an Appointment",
              p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
            }}/>
        </div>
        <Form>
          <Row className="mb-0 pt-4">
            {dataFormF.map((item, index) => {
              return (
                <Input key={index} type={item.type} placeholder={item.placeholder} controlId={item.id} inputCal={{xs:12,md:12,lg:4}} />
              );
            })}
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col} xs={12} md={12} lg={4} controlId={dataDate.id}>
              <Form.Label></Form.Label>
              <Form.Control
                type={dataDate.type}
                placeholder={dataDate.placeholder}
                className="rounded-0"/>
            </Form.Group>
            {dataFormS.map((item, index) => {
              return (
                <Form.Group as={Col} xs={12} md={12} lg={4} controlId={item.id} key={index}>
                  <Form.Label></Form.Label>
                  <Form.Select
                    defaultValue={item.default}
                    className="rounded-0">
                    <option>{item.select}</option>
                    <option>{item.option}</option>
                  </Form.Select>
                </Form.Group>
              );
            })}
          </Row>
          <Textarea rows={dataFinaly.rows} placeholder={dataFinaly.placeholder}/>
          <div className="text-center mt-3">
            <ButtonCommon dataButton={`${dataFinaly.dataButton}`} />
          </div>
        </Form>
       
      </Container>
    </div>
  );
}
