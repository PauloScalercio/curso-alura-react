import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



const LinkWrapper = (props) => {
    return (
        <NavLink activeStyle={{ fontWeight: "bold" }} {...props}/>
    );
}

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            
            <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <NavLink to="/" className="brand-logo ml-3">Casa do Código</NavLink>
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