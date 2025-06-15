import React from 'react';
import { Card } from '../components/card/Card'; // Importando seu componente Card
import styles from './GlobalPage.module.css'; // Importando seu módulo CSS Modules

export const Filter = () => {
  return (
    <div>
      <div className={styles.container__page__filter}>
        <div className={styles.sidebar}>
          <h3>Pesquisar por: </h3>

          {/* --- Filtro por Marca --- */}
          <h4>Marca</h4>
          
          <div className={styles.dflex}>
            <input type="checkbox" name="brand" id="nike-brand" className={styles.checkbox} />
            <label htmlFor="nike-brand" className={styles.label}>Nike</label>
          </div>

          <div className={styles.dflex}>
            <input type="checkbox" name="brand" id="adidas-brand" className={styles.checkbox} />
            <label htmlFor="adidas-brand" className={styles.label}>Adidas</label>
          </div>

          <div className={styles.dflex}>
            <input type="checkbox" name="brand" id="puma-brand" className={styles.checkbox} />
            <label htmlFor="puma-brand" className={styles.label}>Puma</label>
          </div>

          <div className={styles.dflex}>
            <input type="checkbox" name="brand" id="reebok-brand" className={styles.checkbox} />
            <label htmlFor="reebok-brand" className={styles.label}>Reebok</label>
          </div>

          {/* --- Filtro por Categoria --- */}
          <h4>Categorias</h4>

          <div className={styles.dflex}>
            <input type="checkbox" name="category" id="shoes-category" className={styles.checkbox} />
            <label htmlFor="shoes-category" className={styles.label}>Calçados</label>
          </div>

          <div className={styles.dflex}>
            <input type="checkbox" name="category" id="apparel-category" className={styles.checkbox} />
            <label htmlFor="apparel-category" className={styles.label}>Vestuário</label>
          </div>

          <div className={styles.dflex}>
            <input type="checkbox" name="category" id="accessories-category" className={styles.checkbox} />
            <label htmlFor="accessories-category" className={styles.label}>Acessórios</label>
          </div>

          {/* Adicione mais categorias se desejar, seguindo o padrão */}
          <div className={styles.dflex}>
            <input type="checkbox" name="category" id="sportswear-category" className={styles.checkbox} />
            <label htmlFor="sportswear-category" className={styles.label}>Esportivo</label>
          </div>

        </div> {/* Fim de .sidebar */}

        <div className={styles.container__cards__filter}>
          <Card /> {/* Seu componente Card será renderizado aqui */}
        </div>
      </div> {/* Fim de .container__page__filter */}
    </div>
  );
};