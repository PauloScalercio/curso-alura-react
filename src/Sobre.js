import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class Sobre extends Component{

    constructor(props){
        super(props);
        this.state = {
            titulo: "Sobre"
        }
    }
    render(){
        return(
            <Fragment>
                <Header />
                <Main rota={this.props.location.pathname} titulo={this.state.titulo}/>
                <Footer />
            </Fragment>
        );
    }
}

export default Sobre;