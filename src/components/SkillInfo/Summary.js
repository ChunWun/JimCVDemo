import styles from "./Summary.module.css";


//TODO
const Summary = () => {
	return (
		<section className={styles.summary}>
			<h2>This is Jim Huang's brief!</h2>
			<p>
				A diligent Game Engineer with 3 years experience. Familiar with TypeScripts in front-end
				development. Also have experience in JavaScript, React.js and HTML/CSS.
			</p>
			<p>
				Also passionate	about building a good workflow to shorten game production time.
			</p>
		</section>
	);
}

export default Summary;