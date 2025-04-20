import React from 'react'
import { ButtonPrimary } from './Button'

const Footer = () => {

    const sitemap = [
        {
            label: 'Inicio',
            href: '#home'
        },
        {
            label: 'Sobre mi',
            href: '#about'
        },
        {
            label: 'Trabajos',
            href: '#work'
        },
        {
            label: 'Contactarme',
            href: '#contact'
        }
    ];

    const socials = [
        {
            label: 'GitHub',
            href: 'https://www.github.com/frandg47'
        },
        {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/franco-dario-giacobbe/'
        },
        {
            label: 'Twitter X',
            href: 'https://x.com/'
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/giacobbefran'
        },
    ];

    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2">

                    <div className="mb-10">
                        <h2 className="headline-2 mb-8 lg:max-w-[12ch]">
                            Trabajemos juntos hoy!
                        </h2>

                        <ButtonPrimary
                            href="mailto:frandg47@gmail.com"
                            label="Comenzar"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20 ">

                        <div>
                            <p className="mb-2">Sitemap</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Redes sociales</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="" className="">
                        <img
                            src="../public/logo-removebg-preview.png"
                            width={40}
                            height={40}
                            alt="logo" />
                    </a>

                    <p className="text-zinc-500 text-sm">
                        &copy; 2025 <span className="text-zinc-200">giacobbefranco</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer