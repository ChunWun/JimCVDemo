import React from "react";
import styles from "./PersonalInfo.module.css";
import Brief from "./Brief/Brief.js";
import Skills from "./Skills/Skills";
import Experiences from "./Experiences/Experiences.js";
import Contact from "./Contact/Contact";


const PersonalInfo = (props) => {
	return (
		<div className={styles.personalInfo}>
			<Brief />
			<Skills />
			<Experiences />
			<Contact />
		</div>
	)
}

export default PersonalInfo;