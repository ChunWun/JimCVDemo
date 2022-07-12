import React from "react";
import styles from "./PersonalInfo.module.css";
import Brief from "./Brief/Brief.js";
import Skills from "./Skills/Skills";
import Experiences from "./Experiences/Experiences.js";


const PersonalInfo = (props) => {
	return (
		<div className={styles.personalInfo}>
			<Brief />
			<Skills />
			<Experiences />
		</div>
	)
}

export default PersonalInfo;