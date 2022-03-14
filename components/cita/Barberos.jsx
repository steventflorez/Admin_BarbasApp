import React from 'react'
import Card_Barbero from './Card_Barbero'

export default function Barberos() {
    return (
        <div>
           <div className="card border-success mb-3 " >
                <div className="card-header">Barberos disponibles</div>
                <div className="card-body text-center">
                    <div className="row text-center">
                        <Card_Barbero name= 'Sebastian'/> 
                        <Card_Barbero name= 'Carlos'/> 
                        <Card_Barbero name= 'Stevent'/> 
                      
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
