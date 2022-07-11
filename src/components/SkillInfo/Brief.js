import React from "react";
import styles from "./Brief.module.css";
import Experiences from "./Experiences";
import Summary from "./Summary";

const Brief = (props) => {
	return (
		<div className={styles.brief}>
			<Summary />
			<Experiences />
		</div>
	)
}

export default Brief;