import React from 'react'
import Barberos from '../components/cita/Barberos'
import Horarios from '../components/cita/Horarios'
import Num_cliente from '../components/cita/Num_cliente'
import Servicios from '../components/cita/Servicios'
import Nav from '../components/Nav'

export default function cita() {
  return (
    <Nav>
        <div className='text-center container cont'>
        <h1>Agendar nueva cita</h1>
        <Barberos/> 
        <h2>Horarios</h2>
        <Horarios/>
        <br />
        <h2>Servicios</h2>
        <Servicios/> 
        <Num_cliente/>
        </div>
       
        
        
    </Nav>
  )
}
