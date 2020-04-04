import React from 'react';

function Lista(props) {
    const { dados, chave } = props;
    return (
        <ul className="collection">
            {
                dados.map(item => <li key={item.id} className="collection-item">{item[chave]}</li>)
            }
        </ul>
    )
}

export default Lista;