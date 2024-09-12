import { Carousel, Container, Row } from "react-bootstrap";
import Title from "../Title/Title";
import './Section12.css'

export default function Section12({dataSec12F,dataSec12S,dataSec12TH,dataGallery}) {
  return (
    <Container className="lk-slider-card mb-5 pb-5">
      <Row className="text-center">
        <Title
          classNameSection4={
            "position-absolute top-100 start-50 translate-middle pt-5"
          }
          title={{
            h2: "Gallery",
            p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",
          }}
        />
      </Row>
      <Carousel data-bs-theme="dark" className="mt-5">
      <Carousel.Item>
          <Row className="lk-slider-img justify-content-center justify-content-lg-between mb-5 pt-3 ps-3 pe-3">
            {dataSec12F.map((item, index) => {
              return (
                <div key={index} className="pb-1 mb-5" style={{width:'220px',height:'140px'}}>
                    <img src={item.src} className="w-100 lk-slider-border"/>
                </div>
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="lk-slider-img justify-content-center justify-content-lg-between mb-5 pt-3 ps-3 pe-3">
            {dataSec12S.map((item, index) => {
              return (
                <div key={index} className="mb-5 pb-5" style={{width:'220px',height:'140px'}}>
                    <img src={item.src} className="w-100 lk-slider-border"/>
                </div>
              );
            })}
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="lk-slider-img justify-content-center justify-content-lg-between mb-5 pt-3 ps-3 pe-3">
            {dataSec12TH.map((item, index) => {
              return (
                <div key={index} className="pb-5 mb-5" style={{width:'220px'}}>
                    <img src={item.src} className="w-100 lk-slider-border"/>
                </div>
              );
            })}
          </Row>
        </Carousel.Item>
        {dataGallery.map((item,index)=>{
            return(
                <Carousel.Item key={index} className="mb-3" >
          
          <div className="pb-1 mb-4 ps-3 pt-3" style={{width:'225px',height:'140px'}}>
                    <img src={item.src} className="w-100 lk-slider-border"/>
                </div>
            
        </Carousel.Item>
            )
        })}
    
       
      </Carousel>
    </Container>
  );
}

