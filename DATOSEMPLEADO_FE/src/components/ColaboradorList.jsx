import { useEffect, useState } from "react"
import { getAllColaboradores } from "../api/colaboradores.api";
import { ColaboradorCard } from "./ColaboradorCard";

export function ColaboradorList() {

    const [colaboradores, setColaboradores] = useState([]);
    
    useEffect(() => {
        async function loadColaboradores(){
            const res = await getAllColaboradores();
            setColaboradores(res.data);
        }
        loadColaboradores();
    }, []);

    return <div className="grid grid-cols-3 gap-3">
        {colaboradores.map(colaborador => (
            <ColaboradorCard key={colaborador.idcolaborador} colaborador={colaborador} /> 
        ))}
    </div>;
}

