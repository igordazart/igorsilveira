import './style.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'
import SkillsBar from '../SkillsBar'
import imagem from '../../assets/eu.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function AboutMe(){
    return(
        <section className='aboutme section' id='aboutme'>
            <AnimationOnScroll animateIn='animate__fadeIn'>
            <h2 className='section__title text-cs'>Sobre Mim</h2>
            <p className='section__subtitle'>
                Um Pouco <span>Sobre Mim</span>
            </p>

            <div className='aboutme__container container'>
                
                <div className='icones'>
                    <div className='icones-separados'>
                        <FontAwesomeIcon className='icon' icon={faPaintBrush}/>
                        <h3>CRIATIVO</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className='icones-separados'>
                        <FontAwesomeIcon className='icon' icon={faMobileScreenButton}/>
                        <h3>RESPONSIVO</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className='icones-separados'>
                        <FontAwesomeIcon className='icon' icon={faRocket}/>
                        <h3>DINAMICO</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>
                    <div className='icones-separados'>
                        <FontAwesomeIcon className='icon' icon={faWandMagicSparkles}/>
                        <h3>INTUITIVO</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    </div>                    
                </div>

                <AnimationOnScroll animateIn='animate__fadeIn'>
                <div className='picture-and-skills'>
                    <div className='minhas-skills'>
                        <SkillsBar/>
                    </div>
                    
                    <div className='picture'>
                        <img src={imagem}/>
                    </div>
                    
                </div>
                </AnimationOnScroll>
            </div>
            </AnimationOnScroll>
        </section>
    )
    
}

export default AboutMe