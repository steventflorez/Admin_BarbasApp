import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from 'react-icons/fa';
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Buscar_barbero() {




  return (
    <div>
        <form>
        
          
        <div className="form-group">
        <label className="form-label mt-4">Telfono</label>
        <div className="input-group mb-3">
          
          <input type="text" className="form-control" id="number" aria-describedby="emailHelp" placeholder="Ingresa Telefono" />
          <button type="submit" className="btn btn-primary "><FaSearch/></button>
          </div>
        </div>
      
      <br />
      
     
   

  </form>
  <br />
  <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">telefono</th>
                        <th scope="col">cedula</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Fecha</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td ></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td > <a  ><FaUserEdit size='2em' color='#06d002' /></a> </td>
                        <td> <a  ><MdDelete size='2em' color='#d0021b' /></a></td>
                    </tr>


                </tbody>
            </table>
    </div>
  )
}
