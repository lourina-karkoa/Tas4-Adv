import React from 'react'
import { Form } from 'react-bootstrap'

export default function Textarea({rows,placeholder}) {
  return (
    <Form.Control
            as="textarea"
            rows={rows}
            placeholder={placeholder}
            className="rounded-0  opacity-75"/>
  )
}
