import React, { useState } from 'react'



export default function Btn_hora({hora, color}) {

    const [horas,setHoras]= useState(hora)
    
    let horaReal = `${hora}:00 am`
    if(hora == 12){
        horaReal ='12:00 pm'
    }
    if(hora == 13 ){
        //setHoras(1)
        horaReal = '1:00 pm'
    }
    if(hora == 14){
       // setHoras(2)
        horaReal = '2:00 pm'
    }
    if(hora == 15){
        //setHoras(3)
        horaReal = '3:00 pm'
    }
    if(hora == 16){
        //setHoras(3)
        horaReal = '4:00 pm'
    }
    if(hora == 17){
        //setHoras(3)
        horaReal = '5:00 pm'
    }
    if(hora == 18){
        //setHoras(3)
        horaReal = '6:00 pm'
    }
     if(hora == 19){
       //setHoras(3)
       horaReal = '7:00 pm'
    }
    if(hora == 20){
        //setHoras(3)
        horaReal = '8:00 pm'
    }

    const clas =`btn btn-${color} btn_hora`
   
  return (
      <div className='col-2'>
          <button type="button" className= {clas}>{horaReal}</button>
      </div>
    
  )
}
