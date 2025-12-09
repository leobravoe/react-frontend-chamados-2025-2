import React, { useState } from 'react'
import { useAuth } from '../../auth/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthFetch } from '../../auth/useAuthFetch';

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ChamadosCreate = () => {
    const [texto, setTexto] = useState("");
    const [estado, setEstado] = useState("");
    // Estou utilizando nesse componenete as variáveis globais definidas dentro do AuthProvider
    const auth = useAuth();
    const authFetch = useAuthFetch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosParaEnviar = {
            texto,
            estado
        }
        const res = await authFetch(`${VITE_API_BASE_URL}/api/chamados`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosParaEnviar),
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(`Algo deu errado. ${data.erro}`);
        }
        else {
            navigate("/chamados");
        }
    }

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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="" className='form-label'>Texto</label>
                    <input type="text"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div>
                    <label htmlFor="" className='form-label'>Estado</label>
                    <input type="text"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div>
                    <button type="submit" className='btn btn-primary'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default ChamadosCreate