import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UsuarioFormRegister = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dadosParaEnviar = {
            nome,
            email,
            senha
        }
        console.log(dadosParaEnviar);
        console.log(JSON.stringify(dadosParaEnviar));
        const res = await fetch("http://localhost:3000/api/usuarios/register",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosParaEnviar),
        });
        if(!res.ok)
            console.log("Deu algum erro");
        navigate("/");
    }

    return (
        <div className='m-2'>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="id-input-nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        id="id-input-nome"
                        className="form-control"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="id-input-email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        id="id-input-email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    />
                </div>
                <div>
                    <button type="submit" className='btn btn-primary'>Registar</button>
                </div>
            </form>
        </div>
    )
}

export default UsuarioFormRegister