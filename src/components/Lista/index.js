import React from 'react';

function Lista(props) {
    const { dados, chave } = props;
    return (
        <div className="container mb-10">
            <ul className="collection">
                {
                    dados.map(item => <li key={item.id} className="collection-item">{item[chave]}</li>)
                }
            </ul>
        </div>
    )
}

export default Lista;