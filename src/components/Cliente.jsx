function Cliente({clientes}){

    const { nombreCliente } = clientes
    const { precioVestido } = clientes
    const { telefono } = clientes
    const { fechaAlquiler } = clientes
    const { fechaDevuelto } = clientes
    const { descVestido } = clientes
    
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre Cliente: <br/>
            <span className="font-normal normal-case">
               {nombreCliente}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Precio de la orden: <br/>
            <span className="font-normal normal-case">
                {precioVestido}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Numero Telefonico: <br/>
            <span className="font-normal normal-case">
                {telefono}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alquilado: <br/>
            <span className="font-normal normal-case">
                {fechaAlquiler}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha a devolver: <br/>
            <span className="font-normal normal-case">
                {fechaDevuelto}
            </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Descripcion de la orden: <br/>
            <span className="font-normal normal-case">
                {descVestido}    
            </span>
        </p>
        <div className="flex justify-between mt-10">
            <button type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg"
            >
                Editar
            </button>
            <button type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg"
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}
export default Cliente;