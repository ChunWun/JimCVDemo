import Card from "../../UI/Card";
import React, { useContext } from "react";
import styles from "./Experiences.module.css";
import ExperienceItem from "./ExperienceItem";
import LanguageContext from "../../Context/LanguageContext";

const EXPERIENCES_LIST = [
	{
		id: 'e1',
		name: 'THE DOJO',
		title: 'Game Engineer',
		description: [
			<li>Built several core games based on <b>Pixi.js</b> and design core function for requirements then bundled by <b>webpack</b>.</li>,
			<li>Use <b>state pattern</b> as the core manager to control the process of the game components.</li>,
			<li>Make good use of OOP to enhance the ease of use and readability of <b>Typescript</b> code.</li>,
			<li>Use SourceTree and Fork as Git GUI for version control, and manage tasks on Jira.</li>,
			<li>Complete all front-end features of Free Round project.</li>,
			<li>Responsible for game client structure maintenance and upgrade.</li>,
			<li>Experience in <b>API</b> and <b>websocket</b> connection.</li>,
			<li>Experience in maintaining Back-Office with <b>React.js</b>.</li>
		],
	},
	{
		id: 'e2',
		name: 'Think a Bit Lab',
		title: 'Game Developer',
		description: [
			<li>Use <b>HTC VIVE</b> as the device base, built several Virtual Reality games based on steamVR.</li>,
			<li>Built 4+ Augmented Reality products through vuforia development kit with Han Lin Co., Ltd.</li>,
			<li>Experience in <b>3DsMax</b> to build models, textures, lighting, motion adjustments, etc.</li>,
			<li>Design the core gameplay and functions for the products and put it on the application platform such as google play and app store.</li>
		],
	}
];

const Experiences = (props) => {
	const languageCtx = useContext(LanguageContext);
	const experiencesList = EXPERIENCES_LIST.map((exp) => {
		return (
			<Card key={exp.id}>
				<ExperienceItem
					id={exp.id}
					name={exp.name}
					title={exp.title}
					description={exp.description}
				></ExperienceItem>
			</Card>

		);
	});

	return (
		<React.Fragment>
			{languageCtx.language}
			<section className={styles.experiences}>
				{experiencesList}
			</section>
		</React.Fragment>
	);
}

export default Experiences;