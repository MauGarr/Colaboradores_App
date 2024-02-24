import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div className="flex justify-between py-5">
      <Link to="/colaboradores">
        <h1 className='font-bold text-3xl mb-4'>Colaboradores App</h1>
      </Link>
    <button className='bg-indigo-600 px-3 py-2 rounded-lg'>
      <Link to="/colaboradores-nuevo">Colaborador Nuevo</Link>
    </button> 
    </div>
  )
}
