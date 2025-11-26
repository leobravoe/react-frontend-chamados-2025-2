import { Link } from "react-router-dom"
import UsuarioFormRegister from "../../components/usuarios/UsuarioFormRegister"

const UsuariosRegister = () => {
  return (
    <div>
        <h1 className="my-0 mx-2">UsuariosRegister.jsx</h1>
        <Link to="/" className="mx-2 btn btn-primary">Voltar</Link>
        <UsuarioFormRegister />
    </div>
  )
}

export default UsuariosRegister