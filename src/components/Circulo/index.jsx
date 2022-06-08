import React from 'react';
import './styles.css';

const Circulo = (props) => {
    const { pesoInicial, dataInicial, title, color } = props;

    return (
        <div className="circulo" style={{ backgroundColor: color ? color : "aqua" }}>
            <strong>
                {title}
            </strong>
            <strong>
                {pesoInicial}
            </strong>
            <strong>
                {dataInicial}
            </strong>
        </div>
    )
};

export default Circulo;