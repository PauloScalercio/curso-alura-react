import validator from 'validator';

class FormValidador {

    constructor(validacoes) {

        this.validacoes = validacoes;

    }

    valida(state) {

        let validacao = this.valido();
        this.validacoes.forEach(rule => {

            if (!validacao[rule.field].isInvalid) {

                const field_value = state[rule.field.toString()];
                const args = rule.args || [];
                const validation_method = typeof rule.method === 'string' ?
                    validator[rule.method] :
                    rule.method
                if (validation_method(field_value, ...args, state) !== rule.validWhen) {
                    console.log("entrou")
                    validacao[rule.field] = {
                        isInvalid: true,
                        message: rule.message
                    }
                    validacao.isValid = false;
                }
            }


        });
        return validacao;

    }

    valido() {
        const validacao = {};

        this.validacoes.forEach(rule => {

            validacao[rule.field] = { isInvalid: false, message: '' }


        });

        return { isValid: true, ...validacao };
    }


}
export default FormValidador;