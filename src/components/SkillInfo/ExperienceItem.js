import styles from "./ExperienceItem.module.css";
import React from "react";


const ExperienceItem = (props) => {

	const description = props.description.map((description) => {
		return (
			<li>{description}</li>
		)
	})

	return (
		<React.Fragment>
			<li className={styles.experience}>
				<div>
					<h3 >{props.name}</h3>
					<div className={styles.title}>
						{props.title}
					</div>
					<div className={styles.description}>
						{description}
					</div>
				</div>
			</li>
		</React.Fragment>
	);
}

export default ExperienceItem;