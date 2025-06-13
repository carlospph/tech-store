import { CampoTexto } from "./CampoTexto";

import Logo from "./Logo";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { ActionUser } from "../actionUser/ActionUser";

export const Header = () => {
	const [openSearch, setOpenSearch] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			{/* menu mobile */}
			<header>
				<div className={styles.header}>
					<div className={styles.header__container}>
						{openSearch && <CampoTexto />}
						<div className={styles.container__flex}>
							<div className={styles.container__bars}>
								<i
									className="fa-solid fa-bars"
									onClick={() => setOpenMenu(!openMenu)}
								></i>
							</div>
							<Logo />

							<div className={styles.container__search}>
								<i
									className="fa-solid fa-search"
									onClick={() => setOpenSearch(!openSearch)}
								/>
							</div>

							<div className={styles.container__cart}>
								<i className="fa-solid fa-cart-shopping" />
							</div>
						</div>
					</div>
					<div className={styles.container}>
						{openMenu && (
							<nav className="mt-4">
								<ul className={styles.menu}>
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

									<li className={styles.user__action}>
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
				<div className={styles.headerComputer}>
					<Logo />
					<CampoTexto />
					<ActionUser />
					<div className={styles.container__cart}>
						<i className="fa-solid fa-cart-shopping" />
					</div>
				</div>
				 <ul className={styles.menuComputer}>
					 <li>
						 <NavLink className={styles.link__custom} to="/">Home</NavLink>
					 </li>
					 <li>
						 <NavLink className={styles.link__custom} to="/produtos">Produtos</NavLink>
					 </li>
					 <li>
						 <NavLink className={styles.link__custom} to="/categorias">Categorias</NavLink>
					 </li>
					 <li>
						 <NavLink className={styles.link__custom} to="/meusPedidos">Meus pedidos</NavLink>
					 </li>
				 </ul>
			</header>
		</>
	);
};
