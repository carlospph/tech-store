import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default function Logo(){
	return(
		<Link to="/">
		<div className={styles.logo}>
			<i className="fa-solid fa-terminal"></i>
			<span>Digital college</span>
		</div>
		</Link>
	)
}