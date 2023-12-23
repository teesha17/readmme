import React from 'react'
import "./Card.css"
export default function Card(props) {
  return (
    
    <div className='card'>
        <img src={props.img} className='card-img' alt=""/>
        <div className='card-body'>
            <h1 className='card-title'>{props.title}</h1>
            <p className='card-sub-title'>{props.subtitle}</p>
            <p className='card-info'>{props.desc}</p>

            <button className='card-btn'>Learn More</button>
        </div>
    </div>
   
  )
}
