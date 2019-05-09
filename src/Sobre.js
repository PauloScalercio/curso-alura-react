import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Footer from './Footer';

class Sobre extends Component {


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