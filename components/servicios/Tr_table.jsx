import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from 'react-icons/fa';

export default function Tr_table({nombre,precio}) {
    return (

        <tr>
            <th scope="row">{nombre}</th>
            <td >{precio}</td>

            <td > <a ><FaUserEdit size='2em' color='#06d002' /></a> </td>
            <td> <a  ><MdDelete size='2em' color='#d0021b' /></a></td>
        </tr>

    )
}
