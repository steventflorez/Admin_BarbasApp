import axios from 'axios';
import React from 'react'
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage  } from "../../firebase.js"


export default function Form_reg_barbero() {


    const [imgUrl, setImgUrl] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

    const [file, setFile] = useState()

    

    const formHandler = async (e) => {


        e.preventDefault();
        console.log(e.target.files[0])
        setFile(e.target.files[0])


        // console.log(file)
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImgUrl(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])

        // const storage = getStorage();
        // const storageRef = ref(storage, file.name)
        // console.log('Uploaded!');
        /* uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                setImgUrl(downloadURL)
                console.log('File available at', downloadURL);
                upImg(imgUrl)
            });
        }); */


    }

    const barberSubmit = async (e) => {
        e.preventDefault();

        const tel_barbero = document.querySelector('#tel_barbero').value;
        const nom_barbero = document.querySelector('#nom_barbero').value;
        const ced_barbero = document.querySelector('#ced_barbero').value;
        const cor_barbero = document.querySelector('#corr_barbero').value;
        const contra_barbero = document.querySelector('#contra_barbero').value;
        const fecha_barbero = document.querySelector('#fecha_barbero').value;
        


        if (ced_barbero == "" & nom_barbero == "" & tel_barbero == "") {

            chengueAlerta('Campos Vacíos', 'Ingresa Todos los campos requeridos', 'alert-danger')
        } else {


            const { data: barberos } = await axios.get('http://localhost:3000/api/barberos', {
                params: {
                    number: document.querySelector('#tel_barbero').value

                }
            })



            if (barberos.length === 0) {

                const storage = getStorage();
                const storageRef = ref(storage, file.name)
                console.log('Uploaded!');
                uploadBytes(storageRef, file).then((snapshot) => {
                    console.log('Uploaded a blob or file!');
                    getDownloadURL(snapshot.ref).then( (downloadURL) => {
                        setImgUrl(downloadURL)
                        console.log('File available at', downloadURL);

                        

                        
                    });

                    
                    datosBarbero()
                    
                });

               

                


            } else {
               
                // chengueAlerta('Usuario ya Existe', 'El usuario que intentas registrar ya se encuentra registrado', 'alert-danger')
                console.log("usuario ya existe", barberos)
            }
        }


    }

    const datosBarbero = async ()=>{
        console.log('aqui')
        const tel_barbero = document.querySelector('#tel_barbero').value;
        const nom_barbero = document.querySelector('#nom_barbero').value;
        const ced_barbero = document.querySelector('#ced_barbero').value;
        const cor_barbero = document.querySelector('#corr_barbero').value;
        const contra_barbero = document.querySelector('#contra_barbero').value;
        const fecha_barbero = document.querySelector('#fecha_barbero').value;

        const res = await axios.post('/api/barberos', {
            nombre: nom_barbero,
            telefono: tel_barbero,
            correo: cor_barbero,
            contraseña: contra_barbero,
            fecha_nacimiento: fecha_barbero,
            barberias_id: "2",
            imagen: imgUrl,
            cedula: ced_barbero

        });

        console.log(res.data)

        //chengueAlerta('Usuario Registrado', res.data, 'alert-success')
        if (res === 'user registed') {
            console.log('usuario registrado con exito!')
        }

        document.querySelector('#tel_barbero').value = ""
        document.querySelector('#nom_barbero').value = ""
        document.querySelector('#ced_barbero').value = ""
    }


    return (
        <div>
            <div >

                <div className="form-group">
                    <div className="input-group mb-3">

                        <input className="form-control" type="file" id="formFile" onChange={formHandler} />

                    </div>
                </div>


                <img src={imgUrl} width={150} className='img_barbero' />

                <form onSubmit={barberSubmit} >

                    <div className="row">
                        <div className="col-6">

                            <div className="form-group">
                                <label className="form-label mt-4">Nombre</label>
                                <input type="text" className="form-control" id="nom_barbero" aria-describedby="emailHelp" placeholder="Ingresa Nombre" />
                            </div>
                        </div>

                        <div className="col-6">

                            <div className="form-group">
                                <label className="form-label mt-4">Telefono</label>
                                <input type="number" className="form-control" id="tel_barbero" aria-describedby="emailHelp" placeholder="Ingresa Telefono" />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label mt-4">Cedula</label>
                                <input type="number" className="form-control" id="ced_barbero" aria-describedby="emailHelp" placeholder="Ingresa cedula" />
                            </div>

                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label mt-4">Correo</label>
                                <input type="email" className="form-control" id="corr_barbero" aria-describedby="emailHelp" placeholder="Ingresa Correo" />
                            </div>

                        </div>

                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label mt-4">Contraseña</label>
                                <input type="password" className="form-control" id="contra_barbero" aria-describedby="emailHelp" placeholder="Ingresa Correo" />
                            </div>

                        </div>

                        <div className="col-6">

                            <div className="form-group">
                                <label className="form-label mt-4">Fecha de Nacimento</label><br />
                                <input type="date" id="fecha_barbero" name="trip-start"

                                    min="1900-01-01" max="2022-01-01"></input>  
                            </div>

                        </div>

                    </div>












                    <br />






                    <br />



                    <button type="submit" className="btn btn-primary w-100">Registrar</button>
                </form>
            </div>
        </div>
    )
}
