import { useState, useEffect, useRef } from 'react';
import "../Projetos/Projetos.css"
import VanillaTilt from 'vanilla-tilt';
import 'aos/dist/aos.css'

export default function Projetos() {

    const [repositorio, setrepositorio] = useState([])

    useEffect(() => {
        fetch("https://api.github.com/users/viniciuszile/repos")
            .then(response => response.json())
            .then(data => setrepositorio(data))
    }, [])

    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);

        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        return <div ref={tilt} {...rest} />;
    }

    return (
        <div className='projetos-main'>

            <h1 className='titulo'>Meus Projetos</h1>

            <div className="container_projetos">

                {repositorio.map(repository => {
                    return (
                        <div className='row-projeto'>

                            <Tilt>
                                <div className="cards-projeto">

                                    <h1 className="nome-cards-projeto">{repository.name}</h1>

                                    <a href={repository.html_url} target="_blank" >

                                        <button className="botao-cards-projeto">Ver repositorio</button></a>

                                </div>
                            </Tilt>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


