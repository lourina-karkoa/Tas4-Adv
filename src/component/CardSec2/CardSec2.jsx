import React from 'react'
import { Card, Col } from 'react-bootstrap'

export default function CardSec2({cardCal,icon,h2,text,className1,className2,className3,lkClassName4,lkSec17Border}) {
  return (
    <Col xs={cardCal.xs} md={cardCal.md} lg={cardCal.lg}>
    <Card
      className={`w-100 shadow p-3 bg-body-tertiary rounded border mb-3 border-0 ${lkClassName4} ${className1}`}>
      <Card.Header className={`bg-transparent fs-3 text-color ${lkSec17Border ? 'lk-sec17-border text-center rounded-circle mx-auto' :'border border-0 '} ${className2}`}>
        {icon}
      </Card.Header>
      <Card.Body className={`pt-1 ${className3}`}>
        <Card.Title>{h2}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
   </Col>
  )
}
