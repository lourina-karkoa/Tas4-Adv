import React from 'react'
import { Col, Form } from 'react-bootstrap'

export default function Input({type,placeholder,controlId,inputCal}) {
  return (
    <Form.Group controlId={controlId} as={Col} xs={inputCal.xs} md={inputCal.md} lg={inputCal.lg}>
               <Form.Label></Form.Label>
               <Form.Control
                 type={type}
                 placeholder={placeholder}
                 className="rounded-0 opacity-75"/>
             </Form.Group>
  )
}
