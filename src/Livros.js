import React, { Component, Fragment } from 'react';
import Header from './Header';
import ApiService from './ApiService';
import Lista from './Lista';

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
                this.setState({ livros: [...this.state.livros, ...res.data] })
            });
    }

    render() {
        const { livros } = this.state;

        return (
            <Fragment>
                <Header />
                <h1>Página de Livros</h1>
                <Lista dados={livros} chave="livro" />
            </Fragment>
        );
    }
}

export default Livros;