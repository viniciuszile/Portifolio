import React from "react";
import "./Footer.css"

import Linkedin from "../Assets/linkedin.png"
import Email from "../Assets/gmail.png"
import GitHub from "../Assets/github.png"

export default function Footer() {
    return (
        <div className="footer-main">

            <div className="row-1-footer">

                <a href="https://www.linkedin.com/in/vinicius-zile-91814a21a/"><img src={Linkedin} alt="Linkedin" className="imagem-footer" /></a>
                <a href="mailto:vinizile@gmail.com"> <img src={Email} alt="Email" className="imagem-footer" />   </a>
                <a href="https://github.com/viniciuszile"> <img src={GitHub} alt="Github" className="imagem-footer" /></a>
            </div>

            <div className="row-2-footer">
                <h1 className="copyright">Copyright ©2022 Vinicius Zile</h1>
            </div>
        </div>
    )
}