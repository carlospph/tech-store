import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export const Link__button = () => {

  return(
    <div className={styles.Link__button}>
      <Link to="/cadastrese" className={styles.link__link}> Cadastre-se</Link>
      <Link to="/entrar" className={styles.btn}> ENTRAR </Link>
    </div>
  )
}