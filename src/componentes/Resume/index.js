import React from 'react'
import './style.css'
import { cv } from '../../Data'
import Card from './Card'
import { AnimationOnScroll } from 'react-animation-on-scroll';

function Resume(){
    return(
        <section className='resume section' id='resume'>
            <AnimationOnScroll animateIn='animate__fadeIn'>
            <h2 className='section__title text-cs'>Formações e Experiência Profissional</h2>
            <p className='section__subtitle'>
                
            </p>

            <div className='resume__container container grid'>
                <div className='resume__group'>
                    <h3 className='resume__heading'>Formações</h3>

                    <div className='resume__items'>
                        {cv.map((val, id) => {
                            if(val.category === 'education'){
                                return <Card 
                                            key={id} 
                                            title={val.title} 
                                            subtitle={val.subtitle} 
                                            date={val.date} 
                                            description={val.description}
                                        />                               
                            }
                        })}
                    </div>
                </div>

                <div className='resume__group'>
                    <h3 className='resume__heading'>Experiência</h3>

                    <div className='resume__items'>
                        {cv.map((val, id) => {
                            if(val.category === 'experience'){
                                return <Card 
                                            key={id} 
                                            title={val.title} 
                                            subtitle={val.subtitle} 
                                            date={val.date} 
                                            description={val.description}
                                        />                               
                            }
                        })}
                    </div>
                </div>
            </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Resume