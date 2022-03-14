import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from 'react-icons/fa';

export default function FormServicios() {
    return (
        <div>
            <div className=" container-register">

                <h2>Registro de Servicios</h2>
                <form>
                    <div className="row">

                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label mt-4">Nombre del servicio</label>
                                <input type="text" className="form-control" id="nom_barbero" aria-describedby="emailHelp" placeholder="Ingresa Nombre del servicio" />
                            </div>

                        </div>
                        <div className="col-6">

                            <div className="form-group">
                                <label className="form-label mt-4">Precio del servicio</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text">$</span>
                                    <input type="text" className="form-control" placeholder='Precio del servicio' aria-label="Amount (to the nearest dollar)" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 ">
                        <button type="submit" className="btn btn-primary ">Agregar</button>
                    </div>
                </form>


            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre Servicio</th>
                        <th scope="col">Precio</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td ></td>
                       
                        <td > <a ><FaUserEdit size='2em' color='#06d002' /></a> </td>
                        <td> <a  ><MdDelete size='2em' color='#d0021b' /></a></td>
                    </tr>


                </tbody>
            </table>

        </div>
    )
}
