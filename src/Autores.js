import React, { Fragment, Component } from 'react';
import Header from './Header';
import ApiService from './ApiService';
import Lista from './Lista';

class Autores extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nomes: []
        }
    }

    componentDidMount(){
        ApiService.ListaNomes()
            .then(res => {
                this.setState({
                    nomes: [...this.state.nomes, ...res.data]
                });
            });
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