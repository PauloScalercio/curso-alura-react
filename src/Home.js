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
      autores: []

    };
  }

  removeAutor = index => {

    const { autores } = this.state;
    PopUp.exibeMensagem("Autor removido com sucesso", "error");

    this.setState({
      autores: autores.filter((autor) => {
        
        return autor.id !== index;
      })
    });
    ApiService.RemoveAutor(index);
  }

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => res.data)
      .then(autor =>{
        this.setState({ autores: [...this.state.autores, autor] });
        PopUp.exibeMensagem("Autor adicionado com sucesso", "success");
      });
    
    
    
  }

  componentDidMount() {
    ApiService.ListaAutoresLivrosPreco()
      .then(res => { this.setState({ autores: [...this.state.autores, ...res.data] }) });
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
