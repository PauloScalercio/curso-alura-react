import React, { Component, Fragment } from 'react';
import Header from './Header';

import DataTable from './DataTable';

class Autores extends Component {

    constructor(props) {
        super(props);

        this.state = {
            autores: [{
                id:1,
                nome: 'Paulo',
                livro:'teste',
                preco:100
            }],
            titulo: 'Autores'
        }
    }


    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Autores</h1>
                    <DataTable dados={this.state.autores} titulo={this.state.titulo} colunas={['nome']} />

                </div>
                
            </Fragment>
        );
    }
}
export default Autores;