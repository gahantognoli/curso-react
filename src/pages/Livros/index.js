import React, { Component, Fragment } from 'react';
import Header from '../../components/Cabecalho';
import ApiService from '../../utils/ApiService';
import Tabela from '../../components/Tabela';
import PopUp from '../../utils/PopUp';

class Livros extends Component {

    constructor(props) {
        super(props);
        this.state = {
            livros: []
        }
    }

    //Executado após o render
    componentDidMount() {
        ApiService.ListaLivros()
            .then(res => {
                if (res.message === 'success')
                    this.setState({ livros: [...this.state.livros, ...res.data] })
            })
            .catch(err => PopUp.exibeMensagem('error', ' Erro na comunicação com a API ao tentar listar livros!'));
    }

    render() {
        const { livros } = this.state,
            campos = [{ titulo: 'Livros', dado: 'livro' }];

        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Página de Livros</h1>
                    <Tabela dados={livros} campos={campos} />
                </div>
            </Fragment>
        );
    }
}

export default Livros;