import { NavLink } from "react-router-dom"
import './Header.css';
 
export const MobileMenu = () => {

    return (
        <ul className="mobile-menu">
            <li>
                <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/Produtos">Produtos</NavLink>
            </li>
            <li>
                <NavLink className="link" to="/Categorias">Categorias</NavLink>
            </li>
        </ul> 
    )
  }