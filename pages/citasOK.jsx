import React from 'react'
import Card_Barbero from '../components/cita/Card_Barbero'
import Nav from '../components/Nav'
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from 'react-icons/fa';

export default function citasOK() {
    return (
        <Nav>
            <div className="text-center container cont">

                <h2>Citas</h2>

                <div className="card border-success mb-3 " >
                    <div className="card-header">Barberos disponibles</div>
                    <div className="card-body text-center">
                        <div className="row text-center">
                            <Card_Barbero name='Sebastian' />
                            <Card_Barbero name='Carlos' />
                            <Card_Barbero name='Stevent' />


                        </div>
                    </div>
                </div>
                <br />
                <div className="form-group">
                    <label className="form-label mt-4">Fecha</label><br />
                    <input type="date" id="start" name="trip-start"

                        min="1900-01-01" max="2018-12-31"></input>
                </div>
                <br />


                <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Hora</th>
                        <th scope="col">Nombre cliente</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td ></td>
                        <td > <a  ><FaUserEdit size='2em' color='#06d002' /></a> </td>
                        <td> <a  ><MdDelete size='2em' color='#d0021b' /></a></td>
                    </tr>


                </tbody>
            </table>




            </div>
        </Nav>
    )
}
