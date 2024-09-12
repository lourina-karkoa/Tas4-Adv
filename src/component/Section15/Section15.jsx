import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'

export default function Section15() {
  return (
    <Container fluid>
        <Row className='text-center'>
        <Title classNameSection4={"position-absolute top-100 start-50 translate-middle pt-5"}title={{h2: "Contact",p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",}}/>
        </Row>
        <Row className='mt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3612811034654!2d-74.00356277492553!3d40.710062637735945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sar!2snl!4v1726005689346!5m2!1sar!2snl" width="600" height="450" className='p-0'></iframe>
        </Row>
    
    </Container>
  )
}
