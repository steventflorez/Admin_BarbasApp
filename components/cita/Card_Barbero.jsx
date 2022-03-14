import React from 'react'

export default function Card_Barbero({name}) {
    return (
        <div className='col-2' >
            <div className="card border-primary mb-3 card_barbero" >
                <div className="card-header">{name}</div>
                <div className="card-body">
                   <img src="https://wl-genial.cf.tsp.li/resize/728x/jpg/f6e/ef6/b5b68253409b796f61f6ecd1f1.jpg" className='img_card' alt="" />
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
