import React from 'react'

const aboutItems = [
    {
        label: 'Proyectos personales',
        number: 4
    },
    {
        label: 'Tecnologías aprendidas',
        number: 10
    },
    {
        label: 'Años de formación',
        number: 4
    }
];


const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        ¡Hola! Soy Franco Giacobbe y me dedico a dar vida a ideas a través del código. Me encanta construir interfaces limpias, rápidas y accesibles.
                        En cada proyecto busco un equilibrio entre funcionalidad y estética, usando herramientas como React, Tailwind CSS y Vite. Más allá del código, valoro el trabajo en equipo, la mejora continua y aprender cosas nuevas todos los días.
                    </p>


                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-bold md:text-4xl">{number}</span >
                                        <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }


                        <img
                            src="/logo-removebg-preview.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About