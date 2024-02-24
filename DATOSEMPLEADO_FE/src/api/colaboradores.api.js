import axios from 'axios';

const colaboradorApi = axios.create({
    baseURL: 'http://localhost:8000/colaborador/api/colaborador/'
});

export const getAllColaboradores = () => colaboradorApi.get('/');

export const getColaborador = (idcolaborador) => colaboradorApi.get(`/${idcolaborador}/`);

export const crearColaborador = (colaborador) => colaboradorApi.post('/', colaborador);

export const eliminarColaborador = (idcolaborador) => colaboradorApi.delete(`/${idcolaborador}`);

export const actualizarColaborador = (idcolaborador, colaborador ) => colaboradorApi.put(`/${idcolaborador}/`, colaborador);

