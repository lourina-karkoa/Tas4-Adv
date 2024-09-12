import React from 'react'
import { Container } from 'react-bootstrap'
import Title from '../Title/Title'
import AccordionCommon from '../AccordionCommon/AccordionCommon'



export default function Section14({dataAccordion}) {
  return (
    <div className="bg-Sec8 pt-5 my-5 pb-5">
        <Container>
        <div className="text-center">
          <Title classNameSection4={"position-absolute top-100 start-50 translate-middle pt-5"}title={{h2: "Frequently Asked Qestions",p: "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit",}}/>
        </div>
        <div className='mt-5 pt-3'>
        {dataAccordion.map((item,index)=>{
            return(
                <AccordionCommon key={index} eventKey={`${item.eventKey}`} header={`${item.header}`} body={`${item.body}`}/>
            )
        })}

        </div>
        </Container>
    </div>
  )
}
