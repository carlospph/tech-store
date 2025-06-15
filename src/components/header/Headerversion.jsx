import { NavLink } from "react-router-dom"
import './Header.css';
import logotop from "../../assets/icones/logo-header.svg";

export const Headerversion = () => {
    return (
<>
        <img src={logotop} className="logo"/>
        <ul className="menu">
                 <li>
                 <NavLink className="link" to="/">Home</NavLink>

                 </li>
                 <li>
                 <NavLink className="link" to="/Produtos">produtos</NavLink>


                 </li>
                 <li>

                 <NavLink className="link" to="/Categorias">Categorias</NavLink>

                 </li>
         </ul>
         </>
    )
}