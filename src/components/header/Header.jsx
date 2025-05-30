import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { Logo } from '../logo/Logo';
import { CampoTexto } from './CampoTexto';
import { Link__button } from './Link__button';

export const Header = () => {
  return (
      <header className={styles.header}>
        <div className="container__custom">
        <nav className={styles.navbar}>
          <Link className={styles.nav__item} to="/">
            <Logo />
          </Link>

          <CampoTexto />
          <Link__button />
          <img
            src="src/assets/carrinho.png"
            alt="Carrinho de compras - icone"
            className={styles.icone__carrinho}
          />
        </nav>

        <ul className={styles.menu}>
          <li>
            <Link className={styles.nav__item} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.nav__item} to="/Produtos">
              Produtos
            </Link>
          </li>
          <li>
            <Link className={styles.nav__item} to="/Categorias">
              Categorias
            </Link>
          </li>
          <li>
            <Link className={styles.nav__item} to="/MeusPedidos">
              Produtos
            </Link>
          </li>
        </ul>
        </div>
      </header>
  );
};
