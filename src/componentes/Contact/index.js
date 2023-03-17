import React, { useState } from 'react'
import './style.css'
import axios from 'axios'

function Contact(){
    const [form, setForm] = useState({name: '', email: '', subject: '', message: ''});

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post('https://sheet.best/api/sheets/2272df8e-f14d-4a52-bb99-2496988e8365', form).then((response) => {
            console.log(response)
            setForm({name: '', email: '', subject:'', message: ''})
        })
    }

    return (

        <section className='contact section' id='contact'>
            <h2 className='section__title text-cs'>Contato</h2>
            <p className='section__subtitle'>
                Vamos <span>Conversar Sobre Algumas Ideias</span>
            </p>

            <div className='contact__container container grid'>
                <form className='contact__form' onSubmit={handleSubmit}>
                    <div className='contact__form-group grid'>
                        <div className='contact__form-div'>
                            <label className='contact__form-tag text-cs'>
                                Seu Nome Completo <b>*</b>
                            </label>
                            <input 
                                type='text' 
                                name='name' 
                                onChange={handleChange}
                                value={form.name} 
                                className='contact__form-input'
                            />
                        </div>

                        <div className='contact__form-div'>
                            <label className='contact__form-tag text-cs'>
                                Seu Email <b>*</b>
                            </label>
                            <input 
                                type='email' 
                                name='email' 
                                onChange={handleChange}
                                value={form.email} 
                                className='contact__form-input'
                            />
                        </div>
     <div className='contact__form-div'>
                            <label className='contact__form-tag text-cs'>
                                Seu Assunto <b>*</b>
                            </label>
                            <input 
                                type='text' 
                                name='subject' 
                                onChange={handleChange}
                                value={form.subject} 
                                className='contact__form-input'
                            />
                        </div>
   
                        <div className='contact__form-div contact__form-area'>
                            <label className='contact__form-tag text-cs'>
                                Sua Mensagem <b>*</b>
                            </label>
                            <textarea 
                                name='message' 
                                onChange={handleChange}
                                value={form.message} 
                                className='contact__form-input'
                            ></textarea>
                        </div>

                        <div className='contact__submit'>
                            <button type='submit' className='btn text-css'>Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact