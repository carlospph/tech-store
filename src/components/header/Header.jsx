// ... (other imports)
import './MenuComputer.css';
import './Header.css'; // Updated import

import { ActionUser } from "../actionUser/ActionUser";

export const Header = () => {
    const [openSearch, setOpenSearch] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            {/* menu mobile */}
            <header>
                <div className="header"> {/* Changed from styles.header */}
                    <div className="header__container"> {/* Changed from styles.header__container */}
                        {openSearch && <CampoTexto />}
                        <div className="container__flex"> {/* Changed from styles.container__flex */}
                            <div className="container__bars"> {/* Changed from styles.container__bars */}
                                <i
                                    className="fa-solid fa-bars"
                                    onClick={() => setOpenMenu(!openMenu)}
                                ></i>
                            </div>
                            <Logo />

                            <div className="container__search"> {/* Changed from styles.container__search */}
                                <i
                                    className="fa-solid fa-search"
                                    onClick={() => setOpenSearch(!openSearch)}
                                />
                            </div>

                            <div className="container__cart"> {/* Changed from styles.container__cart */}
                                <i className="fa-solid fa-cart-shopping" />
                            </div>
                        </div>
                    </div>
                    <div className="container"> {/* Changed from styles.container */}
                        {openMenu && (
                            <nav className="mt-4">
                                <ul className="menu"> {/* Changed from styles.menu */}
                                    <li>
                                        <NavLink className="link" to="/">Home</NavLink> {/* Changed from styles.link */}
                                    </li>
                                    <li>
                                        <NavLink to="/produtos">Produtos</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/categorias">Categorias</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/meusPedidos">Meus pedidos</NavLink>
                                    </li>

                                    <li className="user__action"> {/* Changed from styles.user__action */}
                                        <ActionUser />
                                    </li>
                                </ul>
                            </nav>
                        )}
                    </div>
                </div>
            </header>

            {/* menu computer */}
            <header>
                <div className="headerComputer"> {/* Changed from styles.headerComputer */}
                    <Logo />
                    <CampoTexto />
                    <ActionUser />
                    <div className="container__cart"> {/* Changed from styles.container__cart */}
                        <i className="fa-solid fa-cart-shopping" />
                    </div>
                </div>
                <ul className="menuComputer"> {/* Changed from styles.menuComputer */}
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/produtos">Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categorias">Categorias</NavLink>
                    </li>
                    <li>
                        <NavLink to="/meusPedidos">Meus pedidos</NavLink>
                    </li>
                </ul>
            </header>
        </>
    );
};
