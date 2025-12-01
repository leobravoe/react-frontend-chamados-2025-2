import { Link } from 'react-router-dom'
import UsuarioFormLogin from '../../components/usuarios/UsuarioFormLogin'

const UsuariosLogin = () => {
    return (
        <div>
            <h1 className="my-0 mx-2">UsuariosLogin.jsx</h1>
            <Link to="/" className="mx-2 btn btn-primary">Voltar</Link>
            <UsuarioFormLogin />
        </div>
    )
}

export default UsuariosLogin