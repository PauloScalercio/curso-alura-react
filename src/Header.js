import React, { Component } from 'react';
import LinkWrapper from './LinkWrapper';

class Header extends Component {
    
    render() {

        return (
            
            <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <LinkWrapper to="/" className="brand-logo ml-3" activeStyle={{}}>Casa do Código</LinkWrapper>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><LinkWrapper to="/autor">Autores</LinkWrapper></li>
                        <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
                        <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
        );
   
    
    
    }
}
export default Header;