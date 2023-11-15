import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useParams } from "react-router-dom";
import './Details.css'

export const Details = () => {
  const {id} = useParams()
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const getProductById = async() => {
    const { data, error } = await supabase.from('productos').select().eq('id',id)
    const [ obj ] = data
    setProduct(obj)
    setIsLoading(false)
  }

  useEffect(() => {
    getProductById()
  },[])

  console.log(product)

  return (
    <div className='product-details'>
      {
        isLoading ? (<h3>Cargando...</h3>): (
          <>
            <div className='details-content'>
              <div className='info-content'>
                <div>
                  <h1>{product.nombre_del_producto}</h1>
                  <p>{product.descripcion}</p>
                  <button className="btn-details">Volver</button>
                  <button className="btn-details">Agregar al Carrito</button>
                </div>
              </div>
             
                <img className="img-details" src={product.image} alt={product.nombre_del_producto} />
              
            </div>
          </>
        )
      }      
    </div>
  );
};
