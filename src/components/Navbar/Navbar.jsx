import { NavLink, Link } from 'react-router-dom'
import Icon from '../Icon/Icon'
import { categories } from '../../data'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="navbar container">
        <Link to="/" className="navbar__brand"><span className="brand-icon"><Icon name="chef" size={25} /></span><span>Entre <em>sabores</em><small>RECETAS PARA TODOS LOS DÍAS</small></span></Link>
        <nav aria-label="Navegación principal" className="navbar__links">
          <NavLink to="/" end>Todas las recetas</NavLink>
          {categories.map((category) => <NavLink key={category.id} to={`/${category.id}`}>{category.name}</NavLink>)}
        </nav>
        <span className="navbar__note"><Icon name="leaf" size={17} /> Hecho en casa, sabe mejor</span>
      </div>
    </header>
  )
}
