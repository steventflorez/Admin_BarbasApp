import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card_Barbero from './Card_Barbero'



export default function Barberos() {

    const [barberos, setBarberos] = useState([])
    const [services, setServices] = useState()

    useEffect(() => {

        const traerBarberos = async () => {


            const { data: barberos } = await axios.get('http://localhost:3000/api/citas', {
                params: {
                    barberia: "2",
                    table: 'barberos'

                }
            })

            setBarberos(barberos)

            console.log(barberos);

        }

        traerBarberos()




    }, [])

    return (
        <div>
            <div className="card border-success mb-3 " >
                <div className="card-header">Barberos disponibles</div>
                <div className="card-body text-center">
                    <div className="row text-center">


                        {
                            
                        
                        barberos.map((barbero) => (
                            <Card_Barbero key={barbero.id} name={barbero.nombre} img={barbero.imagen} />
                        ))}

                        


                    </div>
                </div>
            </div>
        </div>
    )
}
