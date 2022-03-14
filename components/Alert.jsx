import React, { useState } from 'react'

export default function Alert({ display, presion, titulo, des, tipo, delet }) {
  
    const clase = `modal show ${display} modal_div`
  
    
    const pres = ()=>{
      presion()
    }

    const confirmar = ()=>{
      if(tipo === 'delete'){
        delet()
        presion()
      }
    }

    

   
      return (
        <div>
          <div className={clase} >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{titulo}</h5>
                  <button type="button" onClick={pres} className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"></span>
                  </button>
                </div>
                <div className="modal-body">
                 <p>{des}</p>
                </div>
                <div className="modal-footer">
                  <button type="button" onClick={confirmar} className="btn btn-primary">Confirmar</button>
                  <button type="button"  onClick={pres} className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  




