import React from 'react'
import ProjectCard from './ProjectCard';

const works = [
    {
        imgSrc: '../public/projectAppHotel.png',
        title: 'Full stack hotel app',
        tags: ['API', 'Scrum', 'Development'],
        projectLink: 'https://rolling-hotel.netlify.app/'
    },
    {
        imgSrc: '../public/projectSystemGym.png',
        title: 'Sistema de gestion gym',
        tags: ['Capas', 'POO', 'SQL'],
        projectLink: 'https://github.com/frandg47'
    }
];

const Work = () => {
    return (
        <section
        id="work"
        className="section"
        >
        <div className="container">

            <h2 className="headline-2 mb-8">
                Mis proyectos personales
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard 
                    key={key}
                    imgSrc={imgSrc}
                    title={title}
                    tags={tags}
                    projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
        </section>
    )
}

export default Work