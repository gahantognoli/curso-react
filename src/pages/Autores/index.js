import React, { Fragment, Component } from 'react';
import Header from '../../components/Cabecalho';
import ApiService from '../../utils/ApiService';
import Tabela from '../../components/Tabela';
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
        const { nomes } = this.state,
            campos = [{ titulo: 'Autores', dado: 'nome' }];
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Página de Autores</h1>
                    <Tabela dados={nomes} campos={campos} />
                </div>
            </Fragment>
        );
    }
}

export default Autores;