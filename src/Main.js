import React, { Component, Fragment } from 'react';
import Table from './Tabela';
import Form from './Formulario';
import { withRouter } from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super(props);

        
    }

    render() { 
       if(this.props.location.pathname === "/"){ 
        
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
    if(this.props.location.pathname === "/sobre"){
        return (
            <div className="App container">
                    <h1>{this.props.titulo}</h1>
                    
            </div>
        );
    }


    }

}
export default withRouter(Main);