import { Button } from "../button/Button"; 
import styles from "./OfertSpecial.module.css"; 

export const OfertSpecials = () => {
  return (
    
    <div className={styles.ofertSpecialContainer}> 
      <div className={styles.row__custom}>  
        <div className="col">
          <img
            src="https://github.com/carlospph/projeto-tech/blob/main/tenis__oferta__especial.png?raw=true"
            alt="Imagem do tênis em promoção"
            className="w-100"
          />
          <div className="overlay"></div>
        </div>
        <div className="col">
          <span className={styles.title__ofert}>Oferta especial</span>
          <h2 className={styles.title__ofert__2}>Air Jordan edição de colecionador</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            natus rerum cum culpa repellendus aliquid, at ullam amet itaque
            voluptatibus, dignissimos consequatur? Consequuntur repellat sequi
            quibusdam laborum molestias fugit dicta?
          </p>
          
          <Button className="btn">
            Ver oferta
          </Button>
        </div>
      </div>
    </div>
  );
};