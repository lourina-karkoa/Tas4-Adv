import React from 'react'
import { Card } from 'react-bootstrap'

export default function CardSec11({sec11}) {
  return (
    <Card style={{ width: '16rem' }} className='p-0 border border-0 shadow bg-body-tertiary mb-4 mb-xl-0'>
    <Card.Img variant="top" src={sec11.img} />
    <Card.Body>
      <Card.Title className='text-nav fw-semibold'>{sec11.title}</Card.Title>
      <Card.Text className='text-nav lk-fs opacity-75'>
       {sec11.text}
      </Card.Text>
    </Card.Body>
  </Card>

  )
}
