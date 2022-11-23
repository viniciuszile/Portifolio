import React from "react";
import "./Sobre.css"
import Perfil from "../Assets/user.png"

function Sobre() {
    return (
        <div className="container_sobre">

            <h1>Sobre Mim</h1>

            <div className="container_infos">
                <div className="container_imagem">
                    <img src={Perfil} alt="" className="imagem" />
                </div>

                <div className="container_texto">

                    <h1 className="texto_titulo"> Vinicius Zile</h1>
                    <h1 className="texto_sub-titulo">Web Designer</h1>
                    <p className="texto_sobre">Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.</p>
                </div>
            </div>

        </div>

    )
}

export default Sobre;