import React from 'react'

export default function MapCommon({dataSec4Ul}) {
  return (
     <>
      {dataSec4Ul.map((item,index)=>{
        return(
            <div key={index} className='d-flex justify-content-start d-flex align-items-start gap-1'>
                <span>{item.icon}</span><p className='w-100'>{item.p}</p>
            </div>
        )
     })}
     </>
  )
}
