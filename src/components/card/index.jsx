import React from 'react'
import '../card/index.css'

const Card = (props) => {
  const {user} = props
  return (
    <div className='cardpage'>
        <img src={user.image} alt="" /> <br />
        <h3>Name:{user.firstName}</h3> <br />
        <h3>firstName:{user.lastName}</h3> <br />
        <h4>phone:{user.phone}</h4> <br />
        <h4>email:{user.email}</h4> <br />
        <p>
            <span>region:{user.region}</span> 
            <span>zip:{user.zip}</span>
        </p>
        <p> 
            <span>cars:{user.cars}</span>
            
        </p>
        
    </div>
  )
}

export default Card