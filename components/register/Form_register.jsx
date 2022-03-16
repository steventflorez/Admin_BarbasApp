import axios from 'axios'
import React, { useState } from 'react'



export default function Form_register({chengueAlerta}) {

    const userSubmit = async (e) => {
        e.preventDefault();

        const numm = document.querySelector('#tell').value;
        const nomm = document.querySelector('#nomm').value;
        const apee = document.querySelector('#apee').value;
        const corr = document.querySelector('#corr').value;
        const fecha = document.querySelector('#start').value;

        if(numm == "" & nomm == "" & apee == "" & corr == "" ){
            console.log(numm,nomm,apee,corr)
            chengueAlerta('Campos Vacíos', 'Ingresa Todos los campos requeridos', 'alert-danger')
        }else{

            
            const { data: usuarios } = await axios.get('http://localhost:3000/api/usuarios', {
            params: {
                telefono: document.querySelector('#tell').value

            }
        })

        console.log(usuarios)

        if (usuarios.length === 0) {

            const res = await axios.post('/api/usuarios', {
                telefono: numm,
                nombre: nomm,
                correo : corr,
                fecha_nacimiento: fecha,
                barberias_id: '2'   

            });
            
            console.log(res.data)

            chengueAlerta('Usuario Registrado', res.data, 'alert-success')
            if (res === 'user registed') {
                console.log('usuario registrado con exito!')
            }

            document.querySelector('#tell').value = ""
            document.querySelector('#nomm').value = ""
            document.querySelector('#apee').value = ""
            document.querySelector('#corr').value = ""


        } else {
            chengueAlerta('Usuario ya Existe', 'El usuario que intentas registrar ya se encuentra registrado', 'alert-danger')
        }
        }

        





    }

    return (
        <div className='form-register'>

            <form onSubmit={userSubmit} className='needs-validation' noValidate>

                <div className="form-group">
                    <label className="form-label mt-4">Nombre</label>
                    <input type="text" className="form-control" id="nomm" aria-describedby="emailHelp" placeholder="Ingresa Nombre" required />
                </div>
                <div className="form-group  has-validation">
                    <label className="form-label mt-4">Apellido</label>
                    <input type="text" className="form-control" id="apee" aria-describedby="emailHelp" placeholder="Ingresa Apellido" required />
                    
                </div>
                <div className="form-group">
                    <label className="form-label mt-4">Telefono</label>
                    <input type="text" className="form-control" id="tell" aria-describedby="emailHelp" placeholder="Ingresa Telefono" />
                </div>

                <div className="form-group">
                    <label className="form-label mt-4">Correo</label>
                    <input type="email" className="form-control" id="corr" aria-describedby="emailHelp" placeholder="Ingresa Correo" />
                </div>

                <div className="form-group">
                    <label className="form-label mt-4">Fecha de Nacimento</label><br />
                    <input type="date" id="start" name="trip-start"

                        min="1900-01-01" max="2018-12-31"></input>
                </div>
                <br />



                <button type="submit" className="btn btn-primary w-100">Registrar</button>
            </form>
        </div>
    )
}
