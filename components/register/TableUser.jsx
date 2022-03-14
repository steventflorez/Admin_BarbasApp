import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from 'react-icons/fa';
import axios from 'axios';
import Alert from '../Alert';

export default function TableUser({ user, edit }) {

    const [estado, setEstado] = useState("d-none")
    const [tituloModal, setTituloModal] = useState()
    const [tipo, setTipo] = useState()
    const [desModal, setDesModal] = useState()


    const deleteUser = async () => {
        const res = await axios.delete('http://localhost:3000/api/usuarios', {
            params: {
                number: user[0].numeroUsuario
            }
        })

        user[0].numeroUsuario = ""
        user[0].nombreUsuario = ""
        user[0].apellidoUsuario = ""
        user[0].correoUsuario = ""
        user[0].fechaUsuario = ""
        console.log(res)
    }

    const cambiarDisplay = () => {

        if (estado === "d-none") {
            if (user[0].nombreUsuario != "") {
                setEstado("d-block")
                setTituloModal("Eliminar Usuario")
                setTipo('delete')
                setDesModal(`¿Estas seguro que quieres eliminar a ${user[0].nombreUsuario} ${user[0].apellidoUsuario} ?`)
            }else{
                console.log('no hay nadie')
            }

        } else {
            setEstado("d-none")
        }
    }

    const pres = ()=>{
        edit()
    }



    return (

        <div>
            <Alert display={estado} presion={cambiarDisplay} titulo={tituloModal} tipo={tipo} des={desModal} delet={deleteUser} />

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Numero</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Fecha</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{user[0].numeroUsuario}</th>
                        <td >{user[0].nombreUsuario}</td>
                        <td>{user[0].apellidoUsuario}</td>
                        <td>{user[0].correoUsuario}</td>
                        <td>{user[0].fechaUsuario}</td>
                        <td > <a onClick={pres} ><FaUserEdit size='2em' color='#06d002' /></a> </td>
                        <td> <a onClick={cambiarDisplay} ><MdDelete size='2em' color='#d0021b' /></a></td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}
