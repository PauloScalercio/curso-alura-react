import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Footer from './Footer';

class Sobre extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: "Sobre"
        }
    }
    render() {
        return (
            <Fragment>
                <Header />
                <h1>Sobre</h1>
                <Footer />
            </Fragment>
        );
    }
}

export default Sobre;