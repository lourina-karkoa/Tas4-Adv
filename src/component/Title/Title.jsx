import React from 'react'
import './Title.css'
export default function Title({title,classNameSec6,classNameSection4,size}) {
  return (
    <div className={`w-100 text-nav position-relative`}>
    <div className='position-relative'>
    <h4 className={`fs-2 mx-auto pb-0 mb-0 ${size}`}>{title.h2}</h4>
    <span className={`${classNameSection4} border-7 ${classNameSec6}`}></span>
    </div>
    <p className='pt-5 fw-medium'>{title.p}</p>
    </div>
  )
}
