import { useNavigate } from "react-router-dom"

export function ColaboradorCard({ colaborador }) {

    const navigate = useNavigate();

    return (
        <div className="bg-gray-900 p-3 hover:bg-purple-500 hover.cursor-pointer" 
            onClick={() => {navigate(`/colaboradores/${colaborador.idcolaborador}`)}}>
            <h1 className="font-bold uppercase">{colaborador.nombre}</h1>
            <h1 className="font-bold uppercase">{colaborador.apellido}</h1>
            <h1 className="font-bold uppercase">{colaborador.direccion}</h1>
            <h1 className="font-bold uppercase">{colaborador.edad}</h1>
            <h1 className="font-bold uppercase">{colaborador.profesion}</h1>
            <h1 className="font-bold uppercase">{colaborador.estadocivil}</h1>
        </div>
    );
}
