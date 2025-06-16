import { NavLink } from "react-router-dom"
import './Header.css';
import logotop from "../../assets/icones/logo-header.svg";
import { ActionUser } from "../actionUser/ActionUser";
 
 
 
export const Headerversion = () => {
    return (
        <header>

            <div className="header-container">

                <i className="fa-solid fa-bars hamburguer"></i>

                <img src={logotop} className="logo logomarca"/>

                <div className="field">
                    <input type="text" placeholder="Buscar"/>
                    <i className="fa-solid fa-search"></i>
                </div>
                
                <div className="actions">
                    <ActionUser/>
                </div>

                <i className="fa-solid fa-cart-shopping carrinho" />
                <i className="fa-solid fa-search btnSearch" />

            </div>

            <div className="container-menu">

                <ul className="menu">
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

            </div>
        </header>
    )
}