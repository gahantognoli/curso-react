import React, { Component, Fragment } from 'react';
import PopUp from './PopUp';

import './App.css'
import 'materialize-css/dist/css/materialize.min.css';

import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';
import ApiService from './ApiService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autores: []
    }
  }

  componentDidMount(){
    ApiService.ListaAutores()
      .then(res => {
        this.setState({autores: [...this.state.autores, ...res.data]});
      });
  }

  removeAutor = id => {
    this.setState(({ autores }) => {
      return {
        autores: autores.filter((autor, posAtual) => {
          return autor.id !== id;
        })
      }
    });
    PopUp.exibeMensagem('error', 'Autor removido com sucesso');
    ApiService.RemoveAutor(id);
  }

  adicionaAutor = autor => {
    ApiService.CriaAutor(autor)
      .then(res => res.data)
      .then(autor => {
        this.setState({ autores: [...this.state.autores, autor] });
        PopUp.exibeMensagem('success', 'Autor adicionado com sucesso');
      });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <h1>Caso do Código</h1>
        <div className="container mb-10">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form adicionarAutor={this.adicionaAutor} />
        </div>
      </Fragment>
    );
  }
}

export default App;
