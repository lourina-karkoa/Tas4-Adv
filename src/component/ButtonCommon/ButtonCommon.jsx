import React from 'react'
import { Button } from 'react-bootstrap'

export default function ButtonCommon({dataButton,border}) {
  return (
    <div>
         <Button variant="primary" className={`btn btn-nav border ${border} text-white px-4`}>{dataButton}</Button>
    </div>
  )
}
