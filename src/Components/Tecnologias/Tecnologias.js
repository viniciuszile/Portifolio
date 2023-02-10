import React, { useEffect, useRef } from 'react';
import "./Tecnologias.css";
import VanillaTilt from 'vanilla-tilt';
import AOS from "aos";
import 'aos/dist/aos.css'

import Html from "../Assets/html.png"
import Css from "../Assets/css.png"
import Js from "../Assets/js.png"
import Python from "../Assets/python.png"


import Reactjs from "../Assets/react.png"
import Node from "../Assets/node.png"
import Mysql from "../Assets/mysql.png"

import Comunicativo from "../Assets/comunicativo.png"
import Mao from "../Assets/mao.png"
import Criativo from "../Assets/criativo.png"
import Adaptabilidade from "../Assets/adaptabilidade.png"


function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}


export default function Tecnologias() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (

    <div className="Tecnologias_main">

      <div className="container_Tecnologias">

        <h1 className="texto-titulo">Hard-Skills</h1>

        <div className="row-1">

          <Tilt>
            <div className="cards" id='html' data-aos="flip-up">
              <img src={Html} alt="HTML5" className="imagem-tecnologias" />
              <p className="texto-tecnologias">HTML5</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='css' data-aos="flip-up">
              <img src={Css} alt="CSS" className="imagem-tecnologias" />
              <p className="texto-tecnologias">CSS</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='js' data-aos="flip-up">
              <img src={Js} alt="JS" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Java Script</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='python' data-aos="flip-up">
              <img src={Python} alt="Python" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Python</p>
            </div>
          </Tilt>

        </div>

        <div className="row-2">

          <Tilt>
            <div className="cards" id='react' data-aos="flip-down">
              <img src={Reactjs} alt="React.js" className="imagem-tecnologias" />
              <p className="texto-tecnologias">React.js</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='node' data-aos="flip-down">
              <img src={Node} alt="Node.js" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Node.js</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='mysql' data-aos="flip-down">
              <img src={Mysql} alt="Mysql" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Mysql</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='react' data-aos="flip-down">
              <img src={Reactjs} alt="React-Native" className="imagem-tecnologias" />
              <p className="texto-tecnologias">React-Native</p>
            </div>
          </Tilt>

        </div>

        <h1 className="texto-titulo">Soft-Skills</h1>

        <div className="row-3">

          <Tilt>
            <div className="cards" id='adaptabilidade' data-aos="flip-down">
              <img src={Adaptabilidade} alt="React.js" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Adaptabilidade</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='criatividade' data-aos="flip-down">
              <img src={Criativo} alt="Node.js" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Criatividade</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='trabalho' data-aos="flip-down">
              <img src={Mao} alt="Mysql" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Trabalho Em Equipe</p>
            </div>
          </Tilt>

          <Tilt>
            <div className="cards" id='comunicativo' data-aos="flip-down">
              <img src={Comunicativo} alt="React-Native" className="imagem-tecnologias" />
              <p className="texto-tecnologias">Comunicativo</p>
            </div>
          </Tilt>

        </div>
      </div>
    </div>

  )

}
