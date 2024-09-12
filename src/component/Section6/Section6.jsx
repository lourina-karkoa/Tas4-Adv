import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'
import './Section6.css'
export default function Section6({dataSec6,dataMapSec6}) {
  return (
    <Container>
        <Row>
            <Col xs={12} md={12} xl={6}>
            <img className='w-100 h-sec6' src={dataSec6.img}/>
            </Col>
            <Col xs={12} md={12} xl={6} className='mt-5 mt-lg-0'>
            <Title classNameSec6={'position-absolute top-100 start-0 pt-4'} title={{h2:'Enim quis est voluptatibus aliquid consequarte fugiat',p:'Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsum ad sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi.'}}/>
            <div className='pt-4'>
                {dataMapSec6.map((item,index)=>{
                    return(
                        <div key={index} className='pb-4'>
                            <div className='d-flex justify-content-center align-items-center gap-4'>
                            <div className='lk-w bg-white rounded d-flex justify-content-center align-items-center mb-4'>{item.icon}</div>
                            <div className='w-100'>
                                <h4>{item.h2}</h4>
                                <p>{item.p}</p>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            </Col>
        </Row>
    </Container>
  )
}
