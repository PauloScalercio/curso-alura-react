import React, { Component } from 'react';

import MaterialIcon from 'material-icons-react';
import FormValidador from './FormValidador';
import PopUp from './PopUp';


class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidador([
            {
                field: 'nome',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um nome'
            },
            {
                field: 'livro',
                method: 'isEmpty',
                validWhen: false,
                message: 'Entre com um livro.'
            },
            {
                field: 'preco',
                method: 'isInt',
                args: [{ min: 0, max: 10000 }],
                validWhen: true,
                message: 'Entre com um preço numérico.'
            }
        ]);

        this.initialState = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validator.valido()
        }
        this.state = this.initialState;

    }

    submitFormulario = () => {
        const validacao = this.validator.valida(this.state);
        console.log(validacao)
        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.initialState);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];
            campos.forEach(campo => {

            })
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            })

            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem(campo.message, "error");
            });
        }


    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { nome, livro, preco } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input

                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input
                            id="livro"
                            className="validate"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput} />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input
                            id="preco"
                            className="validate"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput} />
                    </div>
                </div>
                <button onClick={this.submitFormulario} className="btn waves-effect waves-light indigo lighten-2" type="button" name="action">Salvar
    <MaterialIcon icon="send" color='#E0F2F1' />
                </button>
            </form>
        );
    }
}
export default Formulario;