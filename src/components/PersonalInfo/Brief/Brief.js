import styles from "./Brief.module.css";


//TODO
const Brief = () => {
	return (
		<section className={styles.brief}>
			<h2>Jim Huang's brief!</h2>
			<p>
				A diligent Game Engineer with 3 years experience. Familiar with TypeScripts in front-end
				development. Also have experience in JavaScript, React.js and HTML/CSS.
			</p>
			<p>
				I'm Also passionate about building a good workflow to shorten game production time.
			</p>
		</section>
	);
}

export default Brief;