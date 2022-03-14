import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import Nav from '../components/Nav'
import Nav_cont from '../components/Nav_cont'

export default function Contable() {
    return (
        
            <Nav_cont>
            <form action="" className='container-register '>
                <div className="row text-center w-50">
                   

                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label mt-4"><strong>Fecha de Inicio</strong></label><br />
                                <input type="date" id="start" name="trip-start"

                                    min="1900-01-01" max={new Date()}></input>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label mt-4"><strong>Fecha de Fin</strong> </label><br />
                                <input type="date" id="start" name="trip-start"

                                    min="1900-01-01" max={new Date()}></input>
                            </div>
                        </div>
                        

                    
                </div>
                <br />
                        <br />
                        <button type="submit" className="btn btn-primary w-100">Buscar</button>
                </form>
                <br />
                <br />
                <div>

                    <div className="container-register">

                    <h3>Resumen Barberia</h3>

<table className="table table-hover">
    <thead>
        <tr>
            <th scope="col">#cortes</th>
            <th scope="col">#barbas</th>
            <th scope="col">#cejas</th>
            <th scope="col">SubTotal</th>
            <th scope="col">Egresos</th>
            <th scope="col">Total</th>
            
        </tr>
    </thead>
    <tbody>
        <tr className='table-primary'>
            <th scope="row">5</th>
            <td >1</td>
            <td>3</td>
            <td>25000</td>
            <td>10000</td>
            <td > 15000 </td>
            
        </tr>


    </tbody>
</table>
                        
                        </div>
            
        </div>

            </Nav_cont>

       
    )
}
