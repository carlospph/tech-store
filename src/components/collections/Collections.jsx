import styles from './Collections.module.css';

export const Collections = () => {
	const collections = [
		{
			id: 1,
			discount: "30% OFF",
			imageSrc: "/collection-1.png",
			altText: "Coleção 1"
		},
		{
			id: 2,
			discount: "30% OFF",
			imageSrc: "/collection-2.png",
			altText: "Coleção 2" 
		},
		{
			id: 3,
			discount: "30% OFF",
			imageSrc: "/collection-3.png",
			altText: "Coleção 3"  
		}
	];

	return (
		<div className={styles.collection__container}>
			{collections.map(collection => (
				<div className="card" key={collection.id}>
					
					<div className={styles.price__desc}>{collection.discount}</div>
					<img src={collection.imageSrc} alt={collection.altText} className={styles.img__collection}/>
					<button className={styles.btn__collection}>Comprar</button>
				</div>
			))}
		</div>
	);
};