import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: './public/images/c#.jpg',
      label: 'C#',
      desc: 'Programación Orientada a Objetos'
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

            <div className="">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard />
                    )
                )
                }
            </div>

        </div>

    </section>
  )
}

export default Skill