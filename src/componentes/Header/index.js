import React, { useEffect, useState } from 'react'
import './style.css'
import {links} from '../../Data'
import logo from '../../assets/logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'

function Header(){
    const [showMenu, setShowMenu] = useState(false)
    const [scrollNav, setScrollNav] = useState(false)

    const scrollTop = () => {
        animateScroll.scrollToTop()
    }

    const changeNav = () => {
        if(window.scrollY >= 150){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu)
    }, [showMenu])

    return(
        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>
            <nav className='nav'>
            <Link to='/' onClick={scrollTop} className='nav__logo text-cs'>
                <img src={logo}/>
            </Link>

            <div className={ `${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                <div className='nav__data'>
                    <ul className='nav__list'>
                        {links.map(({name, path}, index) =>{ 
                            return(
                                <li className='nav__item' key={index}>
                                    <Link 
                                        className='nav__link text-cs'
                                        to={path} 
                                        spy={true} 
                                        hashSpy={true}
                                        smooth={true} 
                                        offset={-150} 
                                        duration={500} 
                                        onClick={() => setShowMenu(!showMenu)}
                                    >
                                        {name}
                                       
                                    </Link>
                                </li>
                            )
                        })}
                    </ul> 

                    <div className='header__socials'>
                        <a href='' className='header__social-link'>
                            <BsLinkedin/>
                        </a>

                        <a href='' className='header__social-link'>
                            <BsGithub/>
                        </a>
                    </div>

                </div>           
            </div>

            <div className='nav__btns'>
                <div className={ `${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </nav>
        </header>
    )
}

export default Header