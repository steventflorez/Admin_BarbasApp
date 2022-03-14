import axios from 'axios';
import React from 'react'
import { FaSearch } from 'react-icons/fa';

export default function SearchUser({loading}) {


  const getUser = async (e)=>{
       

    e.preventDefault();

if(document.querySelector('#number').value != ""){
  const {data: usuarios} = await axios.get('http://localhost:3000/api/usuarios',{
      params:{
        number: document.querySelector('#number').value
      }
    })

    if(usuarios.length != 0){
      loading(usuarios)
    }
    document.querySelector('#number').value = ''
    
    
}
    

      

   // console.log(usuarios )
    
    
}
  return (

    

    <div>
      <form onSubmit={getUser}>
        
          
            <div className="form-group">
              <label className="form-label mt-4">Telefono</label>
              <div className="input-group mb-3">
              <input type="text" className="form-control" id="number" aria-describedby="emailHelp" placeholder="Ingresa Telefono" />
              <button type="submit" className="btn btn-primary "><FaSearch/></button>
              </div>
            </div>
          
          <br />
          
         
       

      </form>
    </div>
  )
}
