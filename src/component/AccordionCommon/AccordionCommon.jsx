import React from 'react'
import { Accordion } from 'react-bootstrap'
import './AccordionCommon.css'

export default function AccordionCommon({eventKey,header,body}) {
  return (
    
    <Accordion className='mb-3'>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{header}</Accordion.Header>
        <Accordion.Body>{body}
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
  )
}
