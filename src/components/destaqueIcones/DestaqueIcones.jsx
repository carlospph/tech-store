import styles from "./DestaqueIcones.module.css";

export const DestaqueIcones = () => {
	return (
		<div className={styles.destaqueIcones}>
			
			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/tenisAtivo.png" className={styles.card__img} alt="Icone do tênis" />
				</div>
				<div>
					<h5 className={styles.card__title}>Tênis</h5>
				</div>
			</div>

			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/calcaAtiva.png" className={styles.card__img} alt="Icone da Calça" />
				</div>
				<div>
					<h5 className={styles.card__title}>Calças</h5>
				</div>
			</div>


			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/relogioAtivo.png" className={styles.card__img} alt="Icone do relógio" />
				</div>
				<div>
					<h5 className={styles.card__title}>Relógio</h5>
				</div>
			</div>


			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/foneAtivo.png" className={styles.card__img} alt="Icone headset" />
				</div>
				<div>
					<h5 className={styles.card__title}>Headset</h5>
				</div>
			</div>

			<div className={styles.card__icone}>
				<div className={styles.icone}>
					<img src="/src/assets/icones/camiseta.png" className={styles.card__img} alt="Icone de camisa" />
				</div>
				<div>
					<h5 className={styles.card__title}>Tshirt</h5>
				</div>
			</div>

			
		</div>
	);
};
