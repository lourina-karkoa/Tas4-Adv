import React from "react";
import { Col, Container, Nav, Row, Tab, Tabs } from "react-bootstrap";
import Title from "../Title/Title";
import "./Section9.css";
export default function Section9({ dataSection9 }) {
  return (
      <Container className="my-5">
        <div className="text-center">
          <Title classNameSection4={"position-absolute top-100 start-50 translate-middle pt-5"}title={{h2: "Departments",p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",}}/>
        </div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="mt-5 pt-3">
            <Col xs={12} lg={6} xl={3}>
              <Nav variant="pills" className="flex-column">
                {dataSection9.map((item, index) => {
                  return (
                    <Nav.Item key={index} className="lk-tabs-border">
                      <Nav.Link eventKey={item.eventKey} className="px-0">{item.title}</Nav.Link>
                    </Nav.Item>
                  );
                })}
              </Nav>
            </Col>
            <Col xs={12} lg={6} xl={6} className="mt-5 mt-xl-0 order-5 order-xl-4">
              <Tab.Content>
                {dataSection9.map((item, index) => {
                  return (
                    <Tab.Pane eventKey={item.eventKey} key={index}>
                      <h2 className='pb-1 text-nav'>{item.title}</h2>
                      <p className='fst-italic mb-2 text-nav'>{item.p}</p>
                      <p className='lh-sm text-nav'> {item.text}</p>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
            <Col xs={12} lg={6} xl={3} className="mt-xl-0 order-3 order-xl-5">
              <Tab.Content>
                {dataSection9.map((item, index) => {
                  return (
                    <Tab.Pane eventKey={item.eventKey} key={index} className="mt-5 mt-lg-0 text-end">
                      <img src={item.img} className="lk-tabs-m"/>
                    </Tab.Pane>
                  );
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
  );
}
