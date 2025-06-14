import { FilterGroups } from '../components/filterGroup/FilterGroups';
import Layout from './Layout';
import styles from './GlobalPage.module.css';
import { Card } from '../components/card/Card';

export const Produtos = () => {
  return (
    <div>
      <Layout>

        <div className={styles.wrapper}>

          <div className={styles.container__page__filter}>

            <FilterGroups>
              <h4>Filtrar por</h4>

              <h5>Preço</h5>

              <select name="" id="">
                <option value="">Menor preço</option>
                <option value="">Maior preço</option>
              </select>

              <label className={styles.field__filter}>
                <input type="checkbox" name="marca" value="adidas" />
                Adidas
              </label>

              <label className={styles.field__filter}>
                <input type="checkbox" name="marca" value="puma" />
                Puma
              </label>
              <label className={styles.field__filter}>
                <input type="checkbox" name="marca" value="nike" />
                Nike
              </label>

              <h5>Categoria</h5>

              <label className={styles.field__filter}>
                <input type="checkbox" name="categoria" value="esporte" />
                Esporte e lazer
              </label>
              <label className={styles.field__filter}>
                <input type="checkbox" name="categoria" value="casual" />
                Casual
              </label>
              <label className={styles.field__filter}>
                <input type="checkbox" name="categoria" value="utilitário" />
                Utilitário
              </label>
              <label className={styles.field__filter}>
                <input type="checkbox" name="corrida" value="Corrida" />
                Corrida
              </label>
              
            </FilterGroups>

          </div>


          <div className={styles.container__cards}>
            <Card />
          </div>
        </div>

      </Layout>

    </div>
  );
};
