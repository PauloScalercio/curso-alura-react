
const ApiService = {

    ListaAutoresLivrosPreco: () => {
        return fetch('https://api-pacientes.herokuapp.com/pacientes')
            .then(res => res.json());
    },
    ListaAutores: () => {
        return fetch('https://api-pacientes.herokuapp.com/pacientes')
            .then(res => res.json());
    },
    ListaLivros: () => {
        return fetch('https://api-pacientes.herokuapp.com/pacientes')
            .then(res => res.json());
    },
    RemoveAutor: () => {
        console.log("removendo autor")
    }


}
export default ApiService;