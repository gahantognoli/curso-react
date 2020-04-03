import React, { Component, Fragment } from 'react';

import './App.css'
import 'materialize-css/dist/css/materialize.min.css';

import Tabela from './Tabela';
import Form from './Formulario';
import Header from './Header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autores: [
        {
          nome: 'Paulo',
          livro: 'React',
          preco: '1000'
        },
        {
          nome: 'Daniel',
          livro: 'Java',
          preco: '99'
        },
        {
          nome: 'Marcos',
          livro: 'Design',
          preco: '150'
        },
        {
          nome: 'Bruno',
          livro: 'DevOps',
          preco: '100'
        }
      ]
    }

    //this.removeAutor = this.removeAutor.bind(this);
  }

  removeAutor = index => {
    this.setState(({ autores }) => {
      return {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        })
      }
    });
  }

  adicionaAutor = autor => {
    this.setState({ autores: [...this.state.autores, autor] })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form adicionarAutor={this.adicionaAutor} />
        </div>
      </Fragment>
    );
  }

}

export default App;
