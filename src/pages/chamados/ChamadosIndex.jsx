import React, { useEffect } from 'react'
import { useAuthFetch } from '../../auth/useAuthFetch';
import { useAuth } from '../../auth/useAuth';
import { Navigate } from 'react-router-dom';

const ChamadosIndex = () => {
    const authFetch = useAuthFetch();
    const auth = useAuth();

    useEffect(() => {
        // cria uma função
        const chamadosFetch = async () => {
            try {
                // Requisição para rota protegida 
                const res = await authFetch("http://localhost:3000/api/chamados");
                if (!res.ok)
                    throw new Error("Algo errado aconteceu");
                console.log("deu tudo certo");
            } catch (error) {
                console.log(error);
            }
        }
        chamadosFetch(); // chama a função a primeira vez
    }, []);

    // Enquanto ainda está carregando o estado de auth, não decide redirecionar
    if (auth.authLoading) {
        return <p>Carregando usuário...</p>; // ou um spinner bonitinho
    }

    // Se não tiver usuário logado, redireciona declarativamente
    if (!auth.user) {
        return <Navigate to="/usuarios/login" replace />;
    }

    return (
        <div>
            <p>Chamados list...</p>
        </div>
    )
}

export default ChamadosIndex