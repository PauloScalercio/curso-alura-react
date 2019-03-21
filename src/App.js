import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import M from 'materialize-css';

import Table from './Tabela';
import Form from './Formulario';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {

  exibeMensagem = (msg, status) => {
    if (status === "success")
      M.toast({ html: msg, classes: "green", displayLength: 2000 })


    if (status === "error")
      M.toast({ html: msg, classes: "red", displayLength: 2000 })


  }

  removeAutor = index => {

    const { autores } = this.state;
    this.exibeMensagem("Autor removido com sucesso", "error");

    this.setState({
      autores: autores.filter((autor, i) => {
        return i !== index;
      })
    });
  }

  escutadorDeSubmit = autor => {
    this.exibeMensagem("Autor adicionado com sucesso", "success");
    this.setState({ autores: [...this.state.autores, autor] });
  }

  state = {
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
    ],
    titulo: "Home"

  };

  render() {
    return (
      <Fragment>
        <Header />
        <Main rota={this.props.location.pathname} titulo={this.state.titulo} autores={this.state.autores} removeAutor={this.removeAutor} exibeMensagem={this.exibeMensagem} escutadorDeSubmit={this.escutadorDeSubmit} />
        <Footer />
      </Fragment>
    );
  }

}



export default App;
