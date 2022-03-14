import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function EditModal({ usuario, display, presion }) {







  const clase = `modal show ${display} modal_div`;

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    correo: ""
  })

  const cargar = () => {

    setUser({
      ...user,
      nombre: usuario[0].nombreUsuario,
      apellido: usuario[0].apellidoUsuario,
      telefono: usuario[0].numeroUsuario,
      correo: usuario[0].correoUsuario
    });

  }










  const presi = () => {
    
    presion()
  }

  const cambio = ({ target: { name, value } }) => {

    setUser({ ...user, [name]: value });
  


  }

  const upUsuario = async (e) => {
    e.preventDefault();
    const num = document.querySelector('#tel').value;
    const nom = document.querySelector('#nom').value;
    const ape = document.querySelector('#ape').value;
    const cor = document.querySelector('#cor').value;


    const res = await axios.put('http://localhost:3000/api/usuarios', {
      numeroUsuario: num,
      nombreUsuario: nom,
      apellidoUsuario: ape,
      correoUsuario: cor,
      id: usuario[0].numeroUsuario,
    })

    presion()

  }


  return (
    <div>
      <div className={clase} >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Editar Usuario</h5>
              <button type="button" onClick={presi} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={upUsuario}>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">Nombre:</label>
                    <input type="name" name='nombre' className="form-control" onChange={cambio} value={user.nombre} id='nom' aria-describedby="emailHelp" placeholder="Enter Nombre" />

                  </div>
                  <div className="col-6">
                    <label htmlFor="">Apellido:</label>
                    <input type="text" name='apellido' className="form-control" id='ape' onChange={cambio} value={user.apellido} aria-describedby="emailHelp" placeholder="Enter Apellido" />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="">Telefono:</label>
                    <input type="text" name='telefono' className="form-control" id='tel' onChange={cambio} value={user.telefono} aria-describedby="emailHelp" placeholder="Enter Number" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="">Correo:</label>
                    <input type="email" name='correo' className="form-control" id='cor' onChange={cambio} value={user.correo} aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                </div>
                <br />
                <div>
                  <button type="submit" className="btn btn-primary">Gusrdar Cambios</button>
                  <button type="button" onClick={cargar} className="btn btn-warning">Cargar</button>
                </div>
              </form>
            </div>


          </div>

        </div>
      </div>
    </div>

  )
}
