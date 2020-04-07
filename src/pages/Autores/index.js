import React, { Fragment, Component } from 'react';
import Header from '../../components/Cabecalho';
import ApiService from '../../utils/ApiService';
import Lista from '../../components/Lista';
import PopUp from '../../utils/PopUp';

class Autores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nomes: []
        }
    }

    componentDidMount() {
        ApiService.ListaNomes()
            .then(res => {
                if (res.message === 'success') {
                    this.setState({
                        nomes: [...this.state.nomes, ...res.data]
                    });
                }
            })
            .catch(err => PopUp.exibeMensagem('error', ' Erro na comunicação com a API ao tentar listar autores!'));
    }

    render() {
        const { nomes } = this.state;
        return (
            <Fragment>
                <Header />
                <h1>Página de Autores</h1>
                <Lista dados={nomes} chave="nome" />
            </Fragment>
        );
    }
}

export default Autores;