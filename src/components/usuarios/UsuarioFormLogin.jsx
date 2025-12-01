import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Toast from '../Toast';

const UsuarioFormLogin = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosParaEnviar = {
            email,
            senha
        }
        try {
            const res = await fetch("http://localhost:3000/api/usuarios/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dadosParaEnviar),
            });
            if (!res.ok)
            {
                const data = await res.json();
                throw new Error(`Algo deu errado. ${data.erro}`);
            }
            else
                navigate("/");
        } catch (error) {
            setError(error.message);
        }

    }

    return (
        <div className='m-2'>
            {error && <Toast error={error} setError={setError} />}
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="id-input-email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        id="id-input-email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="id-input-senha" className="form-label">Senha</label>
                    <input
                        type="password"
                        id="id-input-senha"
                        className="form-control"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button type="submit" className='btn btn-primary'>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default UsuarioFormLogin