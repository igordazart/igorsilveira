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
                        <p>Eu diria que essa é minha maior qualidade. Sempre tive facilidade para criar algo a partir do zero juntamente com um toque artístico. </p>
                    </div>
                    <div className='icones-separados'>
                        <FontAwesomeIcon className='icon' icon={faMobileScreenButton}/>
                        <h3>RESPONSIVO</h3>
                        <p>Responsividade é uma obrigação e dominar as técnicas por trás disso é fundamental para o desenvolvimento de páginas web hoje em dia.</p>
                    </div>
                    <div className='icones-separados'>
                        <FontAwesomeIcon className='icon' icon={faRocket}/>
                        <h3>DINÂMICO</h3>
                        <p>Um site não precisa ser totalmente estático. Ele pode possuir a dosagem certa de dinamismo com movimentos suaves de elementos e que fazem sentido para o usuário final.</p>
                    </div>
                    <div className='icones-separados'>
                        <FontAwesomeIcon className='icon' icon={faWandMagicSparkles}/>
                        <h3>INTUITIVO</h3>
                        <p>Um site contendo muitos elementos, com funcionalidades complexas, podem acabar tornando a navegação pouco intuitiva. Portanto, é fundamental que todos os elementos sejam "auto explicativo" e fácil de usar.</p>
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