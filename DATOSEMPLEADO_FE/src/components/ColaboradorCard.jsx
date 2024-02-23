
export function ColaboradorCard({ colaborador }) {
  return (
    <div>
    <h1>{colaborador.nombre}</h1>
    <h1>{colaborador.apellido}</h1>
    <h1>{colaborador.direccion}</h1>
    <h1>{colaborador.edad}</h1>
    <h1>{colaborador.profesion}</h1>
    <h1>{colaborador.estadocivil}</h1>
    <hr />
    </div>
  )
}
