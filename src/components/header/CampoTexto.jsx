import styles from './Campos.module.css';
export const CampoTexto = () => {

  return(
    <div className={styles.campos}>
      <input type="texto" placeholder="Pesquisar produto"/>
    </div>
  )
}