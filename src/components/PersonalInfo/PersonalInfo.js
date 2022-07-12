import React from "react";
import styles from "./PersonalInfo.module.css";
import Experiences from "./Experiences/Experiences.js";
import Brief from "./Brief/Brief.js";

const PersonalInfo = (props) => {
	return (
		<div className={styles.personalInfo}>
			<Brief />
			<Experiences />
		</div>
	)
}

export default PersonalInfo;