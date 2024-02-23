import axios from 'axios';


export const getAllColaboradores = () => {
    return axios.get('http://localhost:8000/colaborador/api/colaborador/')
}

    