import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import './Hero.css'

export default function Hero({dataCarousel,btnHero}) {
  return (
    <Carousel data-bs-theme="dark" className='position-relative lk-slider-hero'>
        {dataCarousel.map((item,index)=>{
             return(
             <Carousel.Item key={index}>
               <img
               className="d-block w-100 h-100 object-fit-cover"
               src={item.img}/>
             <Carousel.Caption className='bg-light bg-opacity-75 lk-hero-text position-absolute w-75 start-50 translate-middle border-Hero '>
               <h5 className='text-nav fs-2 fw-medium mb-4'>{item.h5}</h5>
               <p className='mb-4 text-nav fw-medium '>{item.p}</p>
               <Button variant="primary" className="btn-nav border border-0 px-4">{btnHero}</Button>
             </Carousel.Caption>
           </Carousel.Item>
             )
        })}
  </Carousel>

  )
}
