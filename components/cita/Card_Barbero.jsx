import React from 'react'

export default function Card_Barbero({name, img}) {
    return (
        <div className='col-2' >
            <div className="card border-primary mb-3 card_barbero" >
                <div className="card-header">{name}</div>
                <div className="card-body">
                   <img src={img} className='img_card' alt="" />
                    <div className="raw">

                    <label htmlFor="" className='stars'>★</label>
                    <label htmlFor="" className='stars'>★</label>
                    <label htmlFor="" className='stars'>★</label>
                    <label htmlFor="" className='stars'>★</label>
                    
                    </div>

                    <button type="button" className="btn btn-success">Seleccionar</button>
                    
                </div>
            </div>
            </div>
            )
}
