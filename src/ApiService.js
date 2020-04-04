const BASE_URL = 'http://localhost:8000/api/';

const ApiService = {
    ListaAutores: () => {
        return fetch(`${BASE_URL}autor`)
            .then(res => res.json());
    },
    CriaAutor: autor => {
        return fetch(`${BASE_URL}autor`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(autor)
        })
        .then(res => res.json());
    },
    ListaNomes: () => {
        return fetch(`${BASE_URL}autor/nome`)
            .then(res => res.json());
    },
    ListaLivros: () => {
        return fetch(`${BASE_URL}autor/livro`)
            .then(res => res.json());
    },
    RemoveAutor: id => {
        return fetch(`${BASE_URL}autor/${id}`, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    }
}

export default ApiService;