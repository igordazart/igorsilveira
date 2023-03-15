import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './style.css'
import {motion} from 'framer-motion'

function Items({projectItems}){
    return(
        <>
        {projectItems.map((projectItem) => {
            const {id, img, category, title, description}=projectItem;
            return(
                <motion.div 
                    layout
                    animate={{opacity:1, scale:1}}
                    initial={{opacity:0.8, scale:0.6}}
                    exit={{opacity:0.8, scale:0.6}}
                    transition={{duration:0.3}}
                    className='portfolio__items card card-two' key={id}
                >
                    <div className='portfolio__img-wrapper'>
                        <img src={img} className='portfolio__img'/>
                    </div>

                    <span className='portfolio__category text-cs'>
                    {category}   
                    </span>

                    <h3 className='portfolio__title'>
                    {title}
                    </h3>

                    <p className='portfolio__description'>
                    {description}
                    </p>

                    <a href='' className='link'>
                        Lorem Ipsum
                        <faArrowRight className="link__icon"></faArrowRight>
                    </a>

                    
                </motion.div>
            )
        })}
        </>
    )
}

export default Items