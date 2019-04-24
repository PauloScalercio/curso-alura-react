import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './home.css';

import Table from './Tabela';
import Form from './Formulario';
import Header from './Header';
import Footer from './Footer';
import PopUp from './PopUp';
import ApiService from './ApiService';

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

    };
  }

  removeAutor = index => {

    const { autores } = this.state;
    PopUp.exibeMensagem("Autor removido com sucesso", "error");

    this.setState({
      autores: autores.filter((autor, i) => {
        return i !== index;
      })
    });
  }

  escutadorDeSubmit = autor => {
    PopUp.exibeMensagem("Autor adicionado com sucesso", "success");
    this.setState({ autores: [...this.state.autores, autor] });
  }

  componentDidMount() {
    ApiService.ListaAutoresLivrosPreco()
      .then(res => { this.setState({ autores: [...this.state.autores, ...res] }) });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <div className="App container mb-10">
            <h1>Casa do Código</h1>
            <Table autores={this.state.autores} removeAutor={this.removeAutor} />
            <Form escutadorDeSubmit={this.escutadorDeSubmit} />
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }

}

// tornar app em home.js, e entre header e footer colocar o conteúdo de cada página  (especifico do home, nesse caso)
// separar em pasta componentes q representam uma pagina
//ideia: fazer com if primeiro por ser intuitivo...
//high order component
//container component /table -recupera os dados
//presentational component  -mostra os dados
// did mount x will mount. ver ql o melhor!
//PROBLEMA SEM REDUUUUUUUUUUUUUUUUUUUUUX

export default App;
