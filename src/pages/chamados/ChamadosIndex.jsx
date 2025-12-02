import React, { useEffect } from 'react'
import { useAuthFetch } from '../../auth/useAuthFetch';

const ChamadosIndex = () => {
    const authFetch = useAuthFetch();
    useEffect( () => {
        // cria uma função
        const chamadosFetch = async () => {
            try {
                // Requisição para rota protegida 
                const res = await authFetch("http://localhost:3000/api/chamados");
            } catch (error) {
                console.log(error);
            }
        }
        chamadosFetch(); // chama a função a primeira vez
    }, [] );

    return (
        <div>
            <p>Chamados list...</p>
        </div>
    )
}

export default ChamadosIndex