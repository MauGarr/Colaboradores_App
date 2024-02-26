import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { crearColaborador, eliminarColaborador, actualizarColaborador, getColaborador } from '../api/colaboradores.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function ColaboradorFormPage() {

  const {register, handleSubmit, formState: {errors}, setValue} = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit (async data => {
    if (params.idcolaborador){
      await actualizarColaborador(params.idcolaborador, data);
      toast.success('¡Colaborador actualizado exitosamente!',{
        position: "top-center",
        style: {
          background: '#9AD0C2',
          color: 'black',
        }
      });
    } else {
      await crearColaborador(data);
      toast.success('¡Colaborador creado exitosamente!',{
        position: "top-center",
        style: {
          background: '#9AD0C2',
          color: 'black',
        }
      });
    }
    navigate('/colaboradores');
  });

  useEffect(() => {
    async function loadColaborador(){
      if (params.idcolaborador){
      const res = await getColaborador(params.idcolaborador);
      setValue("nombre", res.data.nombre);
      setValue("apellido", res.data.apellido);
      setValue("direccion", res.data.direccion);
      setValue("edad", res.data.edad);
      setValue("profesion", res.data.profesion);
      setValue("estadocivil", res.data.estadocivil);
      }
    }
    loadColaborador();
  }, []);


  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input className='bg-gray-800 p-3 rounded-lg block w-full mb-3' type="text" placeholder="Nombre" {...register("nombre", {required: true, maxLength: 45})} />
        {errors.nombre && <span>¡Debes completar este campo!</span>}
        
        <input className='bg-gray-800  p-3 rounded-lg block w-full mb-3' type="text" placeholder="Apellido" {...register("apellido", {required: true, maxLength: 45})} />
        {errors.apellido && <span>¡Debes completar este campo!</span>}
        
        <input className='bg-gray-800  p-3 rounded-lg block w-full mb-3' type="text" placeholder="Dirección" {...register("direccion", {required: true, maxLength: 45})} />
        {errors.direccion && <span>¡Debes completar este campo!</span>}
        
        <input className='bg-gray-800  p-3 rounded-lg block w-full mb-3' type="number" placeholder="Edad" {...register("edad", {required: true, min: 18, max: 100})} />
        {errors.edad && <span>¡Debes ingresar un valor entre 18 a 100!</span>}
        
        <input className='bg-gray-800  p-3 rounded-lg block w-full mb-3' type="text" placeholder="Profesión" {...register("profesion", {required: true, maxLength: 45})} />
        {errors.profesion && <span>¡Debes completar este campo!</span>}
        
        <input className='bg-gray-800  p-3 rounded-lg block w-full mb-3' type="text" placeholder="Estado Civil" {...register("estadocivil", {required: true, maxLength: 45})} />
        {errors.estadocivil && <span>¡Debes completar este campo!</span>}
        
        <button className='bg-indigo-600 p-3 rounded-lg block w-full mt-3'>Guardar</button>
      </form>

      {params.idcolaborador && (
        <div className='flex justify-end'>
          <button className='bg-red-600 p-3 rounded-lg block w-48 mt-3'
          onClick={async () => { const aceptar = window.confirm("¿Estás seguro de eliminar al colaborador?");
            if (aceptar){
              await eliminarColaborador(params.idcolaborador);
              toast.success('¡Colaborador eliminado exitosamente!',{
                position: "top-center",
                style: {
                  background: '#9AD0C2',
                  color: 'black',
                }
              });
              navigate('/colaboradores');
            }
            }}
          >
            Eliminar
          </button>
        </div>
      )}

    </div>
  );
}

