import React from 'react'
import { useState } from 'react'
import Alert from '../components/Alert'
import Nav from '../components/Nav'
import Buscar_barbero from '../components/register_barbero/Buscar_barbero'
import Form_reg_barbero from '../components/register_barbero/Form_reg_barbero'


export default function register_barbero() {


 
  return (


    <Nav>
      <div className='container cont'>
     

      <div className="row ">
        <div className="col-6">
          <div className='container-register'>
            <h2>Registro Barberos</h2>
            <Form_reg_barbero/>
          </div>
        </div>
        <div className="col-6">
          <div className="container-register">
            <h2>Buscar Barbero</h2>

              <Buscar_barbero/>
            
            
          </div>
          <br />


        </div>




      </div>
      
      <Alert />


      </div>
       




      
    </Nav>
  )
}
