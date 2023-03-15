import React, { useState } from 'react'
import List from './List.js'
import Items from './Items.js'
import {projects} from '../../Data'
import "./style.css"
import { AnimatePresence } from 'framer-motion'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const allNavList =[ 
    'all',
    ...new Set(projects.map((project) => project.category))
]


function Projects(){
    const [projectItems, setMenuItems] = useState(projects)
    const [navList, setCategories] = useState(allNavList)

    const filterItems = (category) =>{
        if(category === 'all'){
            setMenuItems(projects)
            return;
        }

        const newProjectItems = projects.filter((item) => item.category === category)
        setMenuItems(newProjectItems) 
    }

    return(
        <section className='projects section' id='projects'>
            <AnimationOnScroll animateIn='animate__fadeInUp'>
            <h2 className='section__title text-cs'>Projetos</h2>
            <p className='section__subtitle'>
                Alguns Dos Meus <span>Trabalhos</span>
            </p>

            <List list={navList} filterItems={filterItems}/>

            <div className='projects__container container grid'>
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems}/>
                </AnimatePresence>
            </div>
            </AnimationOnScroll>
        </section>
    )
}

export default Projects