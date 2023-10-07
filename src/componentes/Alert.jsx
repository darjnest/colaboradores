import React from 'react'
import "../assets/css/style.css";
export default function Alert({alerta}) {

  const { texto, tipo, estado } = alerta;

  return (
    <div className='alert-box col-12 col-lg-4'>
    <div className={`alert fade-in ${estado ? tipo : 'display-none'} `}>
      <span>{texto}</span>
    </div>
    </div>
  )
}
