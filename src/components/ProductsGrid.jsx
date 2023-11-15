import { Link } from 'react-router-dom'
import { formatPesoChileno } from '../helpers/formatPesoChileno'
import './ProductsGrid.css'

export const ProductsGrid = ({isLoading, products}) => {

  return (
    <div className="grid-container">
      { isLoading && (<h3>Cargando...</h3>)}
      { products.length !== 0 || isLoading ? (
        products.map((product) => (
              <div key={product.id} className="card-product animate__animated animate__fadeIn animate__faster">
              <Link to={`/detalles/${product.id}`}><img src={product.image} alt={product.nombre_del_producto} /></Link>
              <h3 className='product-title'>{product.nombre_del_producto}</h3>
              <p>${formatPesoChileno(product.precio)}</p>
            </div>
        ))) :
        (<p className='not-found'>no se encontraron productos</p>)
      }      
    </div>
  )
}

 
