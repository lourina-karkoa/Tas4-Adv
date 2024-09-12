import React from 'react'
import CardSec13 from '../CardSec13/CardSec13'
import { Container, Row } from 'react-bootstrap'
import Title from '../Title/Title'

export default function Section13({dataSec13Card}) {
  return (
    <Container>
        <div className='text-center'>
            <Title classNameSection4={"position-absolute top-100 start-50 translate-middle pt-5"}title={{h2: "Departments",p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",}}/>
        </div>
        <Row className='d-flex justify-content-center justify-content-md-between gap-2 flex-wrap mt-5'>
            {dataSec13Card.map((item,index)=>{
                return(
                    <CardSec13 key={index} header={`${item.header}`} price={`${item.price}`} bgCommon={`${item.bgCommon}`} sup={`${item.sup}`} span1={`${item.span1}`} span2={`${item.span2}`} cal={`${item.cal}`} lin1={`${item.lin1}`} lin2={`${item.lin2}`} li1={`${item.li1}`} li2={`${item.li2}`} li3={`${item.li3}`} li4={`${item.li4}`} li5={`${item.li5}`} btn={`${item.btn}`}/>
                )
            })}
        </Row>

    </Container>
   
  )
}

