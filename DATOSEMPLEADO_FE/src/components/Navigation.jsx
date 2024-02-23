import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>
      <Link to="/colaboradores">
        <h1>Colaboradores App</h1>
      </Link>
      <Link to="/colaboradores-nuevo">Colaborador Nuevo</Link>
    </div>
  )
}
