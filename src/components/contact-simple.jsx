import React, { useState } from 'react'
import * as util from '../utils/utils.js'

const initialState = {
  name: '',
  phone: '',
}
const sucess = {
  sucessMessage: null,
}
export const ContactSimple = (props) => {
  const [{ name, phone}, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    /*if(name == "phone"){
      e.target.setCustomValidity
      ('Entering an email-id is necessary!');

    }*/

    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()    
    if(name.length<3  || phone.length<10 || !containsOnlyNumbers(phone)){
      sucess.sucessMessage="Por favor ingrese sus datos completos."
      setState((prevState) => ({ ...prevState, sucess}))
    }
    else {
      util.sendMessge('Nombre:'+name+'\n Celular:'+ phone)
    .then(
      (result) => {
        console.log("result.text",result)
        sucess.sucessMessage="Datos enviados."
        clearState();
      },
      (error) => {
        console.log(error.text)
      }
    );
    }
  }

  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }

  return (
    <div>
      <div id='contact-simple'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contactanos</h2>
                <p>
                Envía tus datos de contacto y te llamaremos tan pronto como sea posible.                
                </p>
              </div>
              <form name='sentMessage' validate="true" onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={name}
                        className='form-control'
                        placeholder='Nombre'
                        required="required"
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='phone'
                        id='phone'
                        value={phone}
                        name='phone'
                        className='form-control'
                        placeholder='# Celular'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div id='success'>
                <p>
                  {sucess.sucessMessage?sucess.sucessMessage:''}              
                </p>                  
                </div>
                <div className='section-info'>
                <p>
                Al solicitar información acepto los <a href='https://itinterlemd.github.io/pages/terminos' target="_blank" rel="noopener noreferrer">términos y condiciones</a>.                
                </p>
              </div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Solicitar Información
                </button>
              </form>
            </div>
          </div>   
          
        </div>
      </div>
    </div>
  )
}
