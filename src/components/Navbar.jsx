import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <h2 ><span className="logo-span">Cromo</span>Café</h2>
      </div>
      <div className='nav-list'>
      <ul className='list-item'>
        <li><NavLink className={ ({ isActive }) => (isActive ? 'active' : 'item')} to="/">Inicio</NavLink></li>
        <li className='item'><NavLink className={ ({ isActive }) => (isActive ? 'active' : 'item')} to="/tienda">Tienda</NavLink></li>
        <li className='item'><NavLink className={ ({ isActive }) => (isActive ? 'active' : 'item')} to="/contacto">Contacto</NavLink></li>
      </ul>
      </div>
      <div className='nav-list'>
        <ul className='list-item'>
        <li className='item'><img src="/svgs/carro.svg" alt="" /></li>
        <li className='item'><img src="/svgs/persona.svg" alt="." /></li>
        </ul>
      </div>
      </nav>
  )
}


