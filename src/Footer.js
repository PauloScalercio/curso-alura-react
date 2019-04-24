import React, { Component } from 'react';
import LinkWrapper from './LinkWrapper';

class Footer extends Component {

    render() {
        return (
            <footer className="page-footer indigo lighten-2 mb-0">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Caelum/Alura</h5>
                            <p className="grey-text text-lighten-4">Curso inicial de React para a Alura</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><LinkWrapper className="grey-text text-lighten-3" to="/sobre">Sobre</LinkWrapper></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2019 Copyright Text
                        <LinkWrapper to='/paulo' className="grey-text text-lighten-4 right">Desenvolvido por Paulo Scalercio</LinkWrapper>
                    </div>
                    
                </div>
            </footer>
        );
    }

}

export default Footer;
