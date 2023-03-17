import React from 'react'
import eu from '../../assets/body.png'
import olho from '../../assets/eyes.png'
import profileImg from '../../assets/profile-img.png'
import shapeOne from '../../assets/shape-1.png'
import shapeTwo from '../../assets/shape-2.png'
import logo from '../../assets/logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import './style.css'
import NavBar from '../NavBar'

function Home (){

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const anchor = document.querySelector(".home__profile")
        console.log(anchor)
        const rekt = anchor.getBoundingClientRect()
        const anchorX = rekt.left + rekt.width / 2
        const anchorY = rekt.top + rekt.height / 2

        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)

        const eyes = document.querySelectorAll('.eye')
        console.log(eyes)
        eyes.forEach(eye => {
            eye.style.transform = `rotate(${90 + angleDeg}deg)`
        })
    })

    function angle(cx, cy, ex, ey){
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = rad * 180 / Math.PI;
        return deg;
    }

    return (
        <section className='home' id='home'>

            <div className='home__wrapper'>
                
                <div className='home__container container'>
                    
                    <div className='home__left-items'>
                        <p className='home__subtitle text-cs'>
                            Olá, <span>Meu Nome É</span>
                        </p>

                        <h1 className='home__title text-css'>
                            <span>IGOR</span> SILVEIRA
                        </h1>

                        <p className='home__job'>
                            <span className='text-css'>Eu sou</span> <b>Desenvolvedor Front End</b>
                        </p>


                        <p className='home__text'>
                            Procurando um desenvolvedor Front End com aptidão artística e ao mesmo tempo criativo? Então você está no lugar certo!
                        </p>

                        

                        <div className='home__btns'>
                            <a href="" className='btn text-cs'>
                                Contate-me
                            </a>
                            
                        </div>

                        <div className='home__socials'>
                            <a href='' className='home__social-link'>
                                <BsLinkedin/>
                            </a>

                            <a href='' className='home__social-link'>
                                <BsGithub/>
                            </a>
                        </div>
                    </div>
                    
                    
                    <div className='home__img-wrapper'>
                        <div className='home__banner'>
                            <img src={eu} alt="" className='home__profile anchor'/>

                            <div className='eyes'>
                                <img style={{width: "75px", top: "235px", right: "-274px"}} src={olho} className="eye" />
                                <img style={{width: "75px", top: "136px", right: "-470px"}} src={olho} className="eye"/>
                            </div>
                        </div>

                        <img src={shapeOne} className='shape shape__1'/>
                        <img src={shapeTwo} className='shape shape__2'/>
                        <img src={shapeTwo} className='shape shape__3'/>
                    </div>
                    
                    
                </div>
            </div>
        </section>
    )
    
}

export default Home