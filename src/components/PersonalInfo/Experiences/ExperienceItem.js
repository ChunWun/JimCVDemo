import styles from "./ExperienceItem.module.css";
import React from "react";


const ExperienceItem = (props) => {

	const description = props.description.map((description) => {
		return (
			<span key={Math.random()}>{description}</span>
		)
	})

	return (
		<React.Fragment>
			<div className={styles.experience}>
				<div>
					<h3 >{props.name}</h3>
					<div className={styles.title}>
						{props.title}
					</div>
					<div className={styles.description}>
						{description}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ExperienceItem;