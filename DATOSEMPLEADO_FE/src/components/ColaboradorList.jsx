import { useEffect, useState } from "react"
import { getAllColaboradores } from "../api/colaboradores.api"
import { useNavigate } from "react-router-dom"

export function ColaboradorList() {

    const [colaboradores, setColaboradores] = useState([]);
    
    useEffect(() => {
        async function loadColaboradores(){
            const res = await getAllColaboradores();
            setColaboradores(res.data);
        }
        loadColaboradores();
    }, []);

    const navigate = useNavigate();    

    return <div className="my-4">
    <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Nombre</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Apellido</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Dirección</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Edad</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Profesión</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Estado Civil</th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Opciones</th>
        </tr>
        </thead>
        <tbody className="bg-gray divide-y divide-gray-200">
        {colaboradores.map(colaborador => (
            <tr key={colaborador.idcolaborador}>
            <td className="px-4 py-3 whitespace-nowrap">{colaborador.nombre}</td>
            <td className="px-4 py-3 whitespace-nowrap">{colaborador.apellido}</td>
            <td className="px-4 py-3 whitespace-nowrap">{colaborador.direccion}</td>
            <td className="px-4 py-3 whitespace-nowrap">{colaborador.edad}</td>
            <td className="px-4 py-3 whitespace-nowrap">{colaborador.profesion}</td>
            <td className="px-4 py-3 whitespace-nowrap">{colaborador.estadocivil}</td>
            <td className="px-4 py-3 whitespace-nowrap flex">
                <button className='bg-violet-600 p-1 rounded-lg block w-auto'>Nivel de Riesgo</button> 
                <button className='bg-red-600 p-1 rounded-lg block w-auto ml-2'
                    onClick={() => {navigate(`/colaboradores/${colaborador.idcolaborador}`)}}>
                    Editar
                </button> 
            </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>;
}

