import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'
import './Section4.css'
import MapCommon from '../MapCommon/MapCommon'

export default function Section4({dataSec4,dataSec4Ul}) {
  return (
    <Container className='my-5'>
        <div className='text-center'>
        <Title classNameSection4={'position-absolute top-100 start-50 translate-middle pt-5'} title={{h2:'About Us',p:'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit'}}/>
        </div>
        <Row className='w-100 my-5  ms-0'>
            <Col xs={12} md={12} xl={6}>
             <div className='w-100 position-relative'>
             <img src={dataSec4.img} className='w-100'/>
            <div className='position-absolute top-50 start-50 translate-middle'>
              <div className='d-flex justify-content-center align-items-center rounded-circle circle-father text-obcity-color'>
                <div className='d-flex justify-content-center align-items-center rounded-circle circle-son bg-white'>
                    <span className='d-flex justify-content-center align-items-center rounded-circle'>{dataSec4?.icon}</span>
                </div>
              </div>
            </div>
             </div>
            </Col>
            <Col xs={12} md={12} xl={6} className='text-nav'> 
             <h3 className='fw-bolder pb-2 mt-4 mt-xl-0'>{dataSec4.h2}</h3>
             <p className='fst-italic lh-sm pb-3'>{dataSec4.textO}</p>
             <MapCommon dataSec4Ul={dataSec4Ul}/>
             <p className='lh-sm'>{dataSec4.textS}</p>
            </Col>
        </Row>
    </Container>
  )
}