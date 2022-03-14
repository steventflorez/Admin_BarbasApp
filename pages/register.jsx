/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios'
import { useState } from 'react'
import Alert from '../components/Alert'
import AlertaRoja from '../components/AlertaRoja'
import Nav from '../components/Nav'
import EditModal from '../components/register/EditModal'
import Form_register from '../components/register/Form_register'
import SearchUser from '../components/register/SearchUser'
import TableUser from '../components/register/TableUser'
import Form_reg_barbero from '../components/register_barbero/Form_reg_barbero'

export default function register() {

  const [estadoM, setEstadoM] = useState("d-none")
  const [tipoM, setTipoM] = useState()
  const [estado, setEstado] = useState("d-none")
  const [tituloAlerta, setTituloAlerta] = useState()
  const [tipo, setTipo] = useState()
  const [descripcion, setDescripcion] = useState()
  const [usuario, setUsuario] = useState([{
    numeroUsuario: '',
    nombreUsuario: '',
    apellidoUsuario: '',
    correoUsuario: '',
    fechaUsuario: ''
  }])


  const loadingUser = (user) => {
    setUsuario(user)
  }



  const cambiarDisplay = (titulo, descripcion, tipo) => {

    if (estado === "d-none") {

      setEstado("d-block")
      setTipo(tipo)
      setTituloAlerta(titulo)
      setDescripcion(descripcion)

      setTimeout(() => {
        setEstado("d-none")
      }, 5000);


    } else {
      setEstado("d-none")
    }
  }

  const cambiarD = () => {
    if (estadoM === "d-none") {

      setEstadoM("d-block")




    } else {
      setEstadoM("d-none")

    }
  }
  const upUser = () => {

  }



  return (

    <Nav >
      <div className='container cont'>
      <EditModal display={estadoM} presion={cambiarD} upDate={upUser} usuario={usuario} />
      <AlertaRoja titulo={tituloAlerta} tipo={tipo} descripcion={descripcion} estado={estado} chengueAlerta={cambiarDisplay} />

      <div className="row ">
        <div className="col-6">
          <div className='container-register'>
            <h2>Registro Usuario</h2>
            <Form_register chengueAlerta={cambiarDisplay} />
          </div>
        </div>
        <div className="col-6">
          <div className="container-register">
            <h2>Buscar Usuario</h2>

            <SearchUser loading={loadingUser} />
            <hr />
            <br />
            <br />
            Total usuarios Registrados:
            <hr />
            <TableUser user={usuario} edit={cambiarD} />
          </div>
          <br />


        </div>




      </div>
      
      <Alert />


      </div>
      
    </Nav>

  )
}
