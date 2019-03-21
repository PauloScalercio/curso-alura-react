import React, { Component, Fragment } from 'react';
import Table from './Tabela';
import Form from './Formulario';

class Main extends Component {

    constructor(props){
        super(props);

        
    }

    render() { 
        console.log(this.props.rota);
       if(this.props.rota === "/"){ 
        return (

            <main>
                <div className="App container">
                    <h1>{this.props.titulo}</h1>
                    <Table autores={this.props.autores} removeAutor={this.props.removeAutor} />
                    <Form exibeMensagem={this.props.exibeMensagem} escutadorDeSubmit={this.props.escutadorDeSubmit} />
                </div>
            </main>
        );
    }
    if(this.props.rota === "/sobre"){
        return (
            <div className="App container">
                    <h1>{this.props.titulo}</h1>
                    
            </div>
        );
    }


    }

}
export default Main;