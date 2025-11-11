import React from 'react'

const App = () => {

    const fazLogin = async () => {
        const dadosParaEnviar = JSON.stringify({
            email: "leo2@leo.com.br",
            senha: "12345678"
        });
        const response = await fetch("http://localhost:3000/api/usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: dadosParaEnviar
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <div>
            <button onClick={fazLogin}>Click</button>
        </div>
    )
}

export default App