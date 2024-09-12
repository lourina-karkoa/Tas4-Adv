import React from 'react'
import { Card, Col } from 'react-bootstrap'
import './CardSec10.css'
export default function CardSec10({dataCardS10}) {
  return (
    <Card className='my-0 bg-white text-nav' style={{ width: '20rem' }}>
    <Card.Body className='position-relative'>
      <Card.Text className='bg-sec9 px-3 pt-3 pb-5 fst-italic lh-sm rounded'>
        {dataCardS10.iconQutR}{dataCardS10.textF}{dataCardS10.iconQutL}
      </Card.Text>
      <Card.Img className='rounded-circle lk-card10-img position-absolute bottom-0' variant="top" src={dataCardS10.img} />
      </Card.Body>
      <Card.Body className='ps-4'>
      <Card.Title>{dataCardS10.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted text-nav opacity-75">{dataCardS10.textS}</Card.Subtitle>
      </Card.Body>
      </Card>
     
  )
}
