import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import CardSec10 from "../CardSec10/CardSec10";
import "./Section10.css";
import Title from "../Title/Title";

export default function Section10({
  dataSec10F,
  dataSec10S,
  dataSec10TH,
  dataSec10E,
  dataSec10N,
}) {
  return (
    <Container className="lk-slider-card">
      <Row className="text-center">
        <Title
          classNameSection4={
            "position-absolute top-100 start-50 translate-middle pt-5"
          }
          title={{
            h2: "Testimonials",
            p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
          }}
        />
      </Row>
      <Carousel data-bs-theme="dark" className="mt-4">
        <Carousel.Item>
          <Row className="lk-slider-row justify-content-center justify-content-lg-between">
            {dataSec10F.map((item, index) => {
              return (
                <CardSec10
                  key={index}
                  dataCardS10={{
                    iconQutR: item.iconQutR,
                    textF: `${item.textF}`,
                    iconQutL: item.iconQutL,
                    img: `${item.img}`,
                    title: `${item.title}`,
                    textS: `${item.textS}`,
                  }}
                />
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="lk-slider-row justify-content-center justify-content-lg-between">
            {dataSec10S.map((item, index) => {
              return (
                <CardSec10
                  key={index}
                  dataCardS10={{
                    iconQutR: item.iconQutR,
                    textF: `${item.textF}`,
                    iconQutL: item.iconQutL,
                    img: `${item.img}`,
                    title: `${item.title}`,
                    textS: `${item.textS}`,
                  }}
                />
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="lk-slider-row justify-content-center justify-content-lg-between">
            {dataSec10TH.map((item, index) => {
              return (
                <CardSec10
                  key={index}
                  dataCardS10={{
                    iconQutR: item.iconQutR,
                    textF: `${item.textF}`,
                    iconQutL: item.iconQutL,
                    img: `${item.img}`,
                    title: `${item.title}`,
                    textS: `${item.textS}`,
                  }}
                />
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="lk-slider-row justify-content-center justify-content-lg-between">
            {dataSec10N.map((item, index) => {
              return (
                <CardSec10
                  key={index}
                  dataCardS10={{
                    iconQutR: item.iconQutR,
                    textF: `${item.textF}`,
                    iconQutL: item.iconQutL,
                    img: `${item.img}`,
                    title: `${item.title}`,
                    textS: `${item.textS}`,
                  }}
                />
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="lk-slider-row justify-content-center justify-content-lg-between">
            {dataSec10E.map((item, index) => {
              return (
                <CardSec10
                  key={index}
                  dataCardS10={{
                    iconQutR: item.iconQutR,
                    textF: `${item.textF}`,
                    iconQutL: item.iconQutL,
                    img: `${item.img}`,
                    title: `${item.title}`,
                    textS: `${item.textS}`,
                  }}
                />
              );
            })}
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
