import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import './Footer.css'

export default function Footer({dataFooterF,dataFooterTH,dataFooterS}) {
  return (
    <Container fluid className="bg-Sec8 pt-3 mt-5 pb-5">
      <Container className="border-bottom d-flex flex-wrap justify-content-between mt-5 pb-5">
        <Col as={Col} xs={12} md={6} lg={3} xl={3} className="mb-4 mb-xl-0 text-xs-start text-sm-center text-md-start">
                  <h3 className="lh-1 text-nav">{dataFooterF.title}</h3>  
                <ListGroup className="list-group-flush px-0 ">
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav">{dataFooterF.textO}</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav">{dataFooterF.textT}</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav"><span className="fw-bolder">{dataFooterF.phoneT} </span>{dataFooterF.phoneD}</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav"><span className="fw-bolder">{dataFooterF.emailT} </span>{dataFooterF.emailD}</ListGroup.Item>
                </ListGroup>
                <Row className="ms-0 justify-content-xs-start justify-content-sm-center justify-content-md-start">
                  <div className="lh-footer-icon d-flex justify-content-center align-items-center rounded-circle me-2 opacity-75 ">{dataFooterF.icon1}</div>
                  <div className="lh-footer-icon d-flex justify-content-center align-items-center rounded-circle me-2 opacity-75">{dataFooterF.icon2}</div>
                  <div className="lh-footer-icon d-flex justify-content-center align-items-center rounded-circle me-2 opacity-75">{dataFooterF.icon3}</div>
                  <div className="lh-footer-icon d-flex justify-content-center align-items-center rounded-circle opacity-75">{dataFooterF.icon4}</div>
                </Row>
              </Col>
          {dataFooterS.map((item, index) => {
            return (
              <Col key={index} as={Col} xs={12} md={6} lg={3} xl={2} className="mb-4 mb-xl-0 text-xs-start text-sm-center text-md-start">
                  <h5 className="text-nav">{item.title}</h5>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav">{item.li1}</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav">{item.li2}</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav">{item.li3}</ListGroup.Item>
                  <ListGroup.Item className="bg-transparent border border-0 px-0 text-nav">{item.li4}</ListGroup.Item>
                </ListGroup>
              </Col>
            );
          })}
      </Container>
      <Row className="text-center mt-4">
        <h6 className="text-nav">
            {dataFooterTH.text1part1}
            <span className="fw-bolder">{dataFooterTH.text1span} </span>
            {dataFooterTH.text1part2}
        </h6>
        <h6 className="text-nav">
            {dataFooterTH.text2} <span className="text-color">{dataFooterTH.text2part}</span>
        </h6>

      </Row>
    </Container>
  );
}
