import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: './public/images/c#.jpg',
      label: 'C#',
      desc: 'Winforms y POO'
    },
    {
      imgSrc: './public/images/sqlserver.png',
      label: 'SQL Server',
      desc: 'Base de datos relacional'
    },
    {
      imgSrc: './public/images/mongo.png',
      label: 'MongoDB',
      desc: 'Base de datos NoSQL'
    },
    {
      imgSrc: './public/images/express.png',
      label: 'ExpressJS',
      desc: 'Framework para Node.js'
    },
    {
      imgSrc: './public/images/react.png',
      label: 'React',
      desc: 'Librería frontend'
    },
    {
      imgSrc: './public/images/node.jpg',
      label: 'NodeJS',
      desc: 'Entorno de ejecución'
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