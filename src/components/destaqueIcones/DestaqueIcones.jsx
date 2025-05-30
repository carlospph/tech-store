import styles from "./DestaqueIcones.module.css";

export const DestaqueIcones = () => {
	return (
		<div className={styles.destaqueIcones}>
			
			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/iconeTshit.png" alt="Camisa" />
				</div>
				<div>
					<h5 className={styles.card__title}>Camisetas</h5>
				</div>
			</div>

			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/iconePantas.png" alt="Camisa" />
				</div>
				<div>
					<h5 className={styles.card__title}>Calças</h5>
				</div>
			</div>


			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/iconeShoes.png" alt="Tênis" />
				</div>
				<div>
					<h5 className={styles.card__title}>Tênis</h5>
				</div>
			</div>


			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/iconeTshit.png" alt="Camisa" />
				</div>
				<div>
					<h5 className={styles.card__title}>Camisetas</h5>
				</div>
			</div>

			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/iconeTshit.png" alt="Camisa" />
				</div>
				<div>
					<h5 className={styles.card__title}>Camisetas</h5>
				</div>
			</div>

			
		</div>
	);
};
