import './style.css'
import React, { Component } from 'react'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function NavBar(){
   
        return(
        <nav className='navbar'>
            <a href=''><img src={logo}/></a>

            <div className='navbar__menus'>
                <ul className='navbar__links'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Sobre Mim</a></li>
                    <li><a href='#'>Projetos</a></li>
                    <li><a href='#'>Experiência</a></li>
                    <li><a href='#'>Contato</a></li>
                </ul>
            </div>

        </nav>
        )
    
    
}

export default NavBar