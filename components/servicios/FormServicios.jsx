import React, { useState, useEffect} from 'react'
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from 'react-icons/fa';
import axios from 'axios';
import Tr_table from './Tr_table';



export default  function FormServicios() {


    const [services, setServices] = useState([{
        nombre:"",
        precio:"",
        id: 1
    }])

services.length
    useEffect( ()=>{

        const traerServicios = async () => {


            const { data: servicios } = await axios.get('http://localhost:3000/api/servicios', {
                params: {
                    barberia: "2"
    
                }
            })
    
            setServices(servicios)
    
        }

        traerServicios()

    },[]);


    


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
                        <th scope="col"><a ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                            <path  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                        </svg></a></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                   
                    { services.map((servicio) => (

                        <Tr_table key={servicio.id} nombre={servicio.nombre} precio={servicio.precio} />
                    ))  

                    }
                    


                </tbody>
            </table>

        </div>
    )
}
