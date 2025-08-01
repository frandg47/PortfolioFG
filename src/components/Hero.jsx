import React from 'react'
import { ButtonPrimary, ButtonOutline } from './Button'

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-28 lg:pt-36"
        >
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/franco.jpg"
                                width={40}
                                height={40}
                                alt="Giacobbe Franco portrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Disponible para trabajar
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Hola, soy Franco. Desarrollo aplicaciones rápidas, escalables y elegantes.
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Descargar CV"
                            icon="download"
                            href={"/CVGiacobbeFranco.pdf"}
                        />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img
                            src="/francoHero.png"
                            width={656}
                            height={800}
                            alt="Franco Giacobbe"
                            className="w-full" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero