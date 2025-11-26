import React from 'react'

const UsuarioFormRegister = () => {
    return (
        <div className='m-2'>
            <form>
                <div className="mb-2">
                    <label htmlFor="id-input-nome" className="form-label">Nome</label>
                    <input type="text" id="id-input-nome" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="id-input-email" className="form-label">email</label>
                    <input type="email" id="id-input-email" className="form-control" />
                </div>
                <div className="mb-2">
                    <label htmlFor="id-input-senha" className="form-label">senha</label>
                    <input type="password" id="id-input-senha" className="form-control" />
                </div>
                <div>
                    <button type="submit" className='btn btn-primary'>Registar</button>
                </div>
            </form>
        </div>
    )
}

export default UsuarioFormRegister