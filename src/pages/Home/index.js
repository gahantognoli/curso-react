import React, { Component, Fragment } from 'react';
import PopUp from '../../utils/PopUp';

import './style.css'
import 'materialize-css/dist/css/materialize.min.css';

import Tabela from '../../components/Tabela';
import Form from '../../components/Formulario';
import Header from '../../components/Cabecalho';
import ApiService from '../../utils/ApiService';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      autores: []
    }
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        if (res.message === 'success')
          this.setState({ autores: [...this.state.autores, ...res.data] });
      })
      .catch(err => PopUp.exibeMensagem('error', ' Erro na comunicação com a API ao tentar listar autores!'));
  }

  removeAutor = id => {
    const { autores } = this.state;

    const autoresAtualizado = autores.filter(autor => {
      return autor.id !== id;
    });

    ApiService.RemoveAutor(id)
      .then(res => {
        if (res.message === 'deleted') {
          this.setState({ autores: [...autoresAtualizado] });
          PopUp.exibeMensagem('error', 'Autor removido com sucesso');
        }
      })
      .catch(err => PopUp.exibeMensagem('error', ' Erro na comunicação com a API ao tentar remover o autor!'));
  }

  adicionaAutor = autor => {
    ApiService.CriaAutor(autor)
      .then(res => {
        if (res.message === 'success') {
          this.setState({ autores: [...this.state.autores, res.data] });
          PopUp.exibeMensagem('success', 'Autor adicionado com sucesso');
        }
      })
      .catch(err => PopUp.exibeMensagem('error', 'Erro na comunicação com a API ao tentar criar o autor!'));
  }

  render() {
    const campos = [
      { titulo: 'Autores', dado: 'nome' },
      { titulo: 'Livros', dado: 'livro' },
      { titulo: 'Preços', dado: 'preco' }
    ]
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Livraria</h1>
          <Form adicionarAutor={this.adicionaAutor} />
          <Tabela campos={campos} dados={this.state.autores} removeDados={this.removeAutor} />
        </div>
      </Fragment>
    );
  }
}

export default App;
