import React from 'react'
import Btn_hora from './Btn_hora'

export default function Horarios() {

  const array = [9,10,11,12,13,14,15,16,17,18,19,20]

  return (
    <div>
       
        <div className="row">
        

        {array.map((hora)=>(
            
            <Btn_hora key={hora} color = 'primary' hora= {hora}/>
            
       ))}
        </div>
        
  
    </div>
  )
}
