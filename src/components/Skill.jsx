import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/csharp.svg",
    label: "C#",
    desc: "Winforms y POO",
  },
  {
    imgSrc: "/images/sqlserver.svg",
    label: "SQL Server",
    desc: "Base de datos relacional",
  },
  {
    imgSrc: "/images/mongo.svg",
    label: "MongoDB",
    desc: "Base de datos NoSQL",
  },
  {
    imgSrc: "/images/express.svg",
    label: "ExpressJS",
    desc: "Framework para Node.js",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Librería frontend",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Entorno de ejecución",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySql",
    desc: "Base de datos relacional",
  },
  {
    imgSrc: "/images/cplusplus.svg",
    label: "C++",
    desc: "Lenguaje de programación ",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Control de versiones",
  },
  {
    imgSrc: "/images/visualstudio.svg",
    label: "Visual Studio",
    desc: "Entorno de desarrollo",
  },
  {
    imgSrc: "/images/visualstudiocode.svg",
    label: "Visual Studio Code",
    desc: "Editor de código fuente",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2">Herramientas Principales que utilizo</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w[50ch]">
          Descubre las poderosas herramientas y tecnologias que utilizo para
          crear aplicaciones & sitios web de alta calidad
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
