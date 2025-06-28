import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: './public/images/c#.jpg',
      label: 'C#',
      desc: 'Winforms y POO'
    },
    {
      imgSrc: '/images/sqlserver.png',
      label: 'SQL Server',
      desc: 'Base de datos relacional'
    },
    {
      imgSrc: '/images/mongo.png',
      label: 'MongoDB',
      desc: 'Base de datos NoSQL'
    },
    {
      imgSrc: '/images/express.png',
      label: 'ExpressJS',
      desc: 'Framework para Node.js'
    },
    {
      imgSrc: '/images/react.png',
      label: 'React',
      desc: 'Librería frontend'
    },
    {
      imgSrc: '/images/node.jpg',
      label: 'NodeJS',
      desc: 'Entorno de ejecución'
    },
    {
      imgSrc: '/images/node.jpg',
      label: 'MySql',
      desc: 'Base de datos relacional'
    }
  ];
  


const Skill = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2">
                Herramientas Principales que utilizo
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w[50ch]">
                Descubre las poderosas herramientas y tecnologias que utilizo para crear aplicaciones & sitios web de alta calidad
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard 
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        />
                    )
                )
                }
            </div>

        </div>

    </section>
  )
}

export default Skill