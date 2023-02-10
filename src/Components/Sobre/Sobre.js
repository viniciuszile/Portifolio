import React from "react";
import "./Sobre.css"
import Perfil from "../Assets/user.png"
import Typical from 'react-typical'

export default function Sobre() {
    return (

        <div className="Sobre_main">

            <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className="container_infos">
                <div className="container_imagem">
                    <img src={Perfil} alt="" className="imagem" />
                    <Typical
                        steps={['Ola', 1000, 'Ola Mundo!', 500]}
                        loop={Infinity}
                        wrapper="p"
                        className="texto_animado"
                    />
                    <Typical
                        steps={['Eu ', 1000, 'Eu sou o Zile', 500]}
                        loop={Infinity}
                        wrapper="p"
                        className="texto_animado"
                    />
                </div>

                <div className="container_texto">

                    <h1 className="texto_cargo">Desenvolvedor Web</h1>
                    <p className="texto_sobre">Olá me chamo Vincius Zile, Tenho 18 anos e moro em São Paulo-SP. Sou um desenvolvedor web/mobile front-end e back-end formado no curso técnico em Desenvolvimento de Sistemas pelo
                        SENAI Suíço-Brasileira “Paulo Ernesto Tolle” e atualmente cursando Análise e Desenvolvimento de Sistemas pelo Centro Universitário SENAC Santo Amaro.</p>
                </div>

            </div>
        </div>


    )
}

