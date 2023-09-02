import React, { useState } from 'react'
import * as util from './../utils/utils.js'

const initialState = {
  name: '',
  phone: '',
}

const sucess = {
  sucessMessage: null,
}
export const Contact = (props) => {
  const [{ name, phone }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
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
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contáctanos</h2>
                <p>
                Complete el siguiente formulario para enviarnos sus datos de contacto 
                y le responderemos tan pronto como sea posible.
                
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
                        required
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
                <div className='section-info'>
                <p>
                Al enviar mis datos de contacto acepto los térmisocs y condiciones (<a href='https://itinterlemd.github.io/pages/terminos' target="_blank" rel="noopener noreferrer" style={{color:'white'}}>Ver</a>).                
                </p>
                </div>
                <div id='success'>
                  <p>
                  {sucess.sucessMessage?sucess.sucessMessage:''}              
                  </p>
                </div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Información de contato</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Dirección
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Télefono
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'} target="_blank" rel="noopener noreferrer">
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'} target="_blank" rel="noopener noreferrer">
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2023 INTERLEM'D Page  
            <a href='https://instituto.interlemd.edu.co' rel='nofollow'>
             - INSTITUTO TÉCNICO LABORAL INTERLEM'D
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
