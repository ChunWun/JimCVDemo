import Card from "../../UI/Card";
import styles from "./Experiences.module.css";
import ExperienceItem from "./ExperienceItem";

const EXPERIENCES_LIST = [
	{
		id: 'e1',
		name: 'THE DOJO',
		title: 'Game Engineer',
		description: [
			'Built several core games based on Pixi.js and design core function for requirements then bundled by webpack.',
			'Use state pattern as the core manager to control the process of the game components.',
			'Make good use of OOP to enhance the ease of use and readability of Typescript code.',
			'Use SourceTree and Fork as Git GUI for version control, and manage tasks on Jira.',
			'Complete all front-end performance of Free Round include function design, api connection, user interface and so on.',
			'Responsible for game client structure maintenance and upgrade.',
			'Use API and websocket connection with back-end developer to build features.',
			'Experience in maintaining Back-Office with React.js.'
		],
	},
	{
		id: 'e2',
		name: 'Think a Bit Lab',
		title: 'Game Developer',
		description: [
			'Use HTC VIVE as the device base, built several Virtual Reality games based on steamVR.',
			'Built 4+ Augmented Reality products through vuforia development kit with Han Lin Co., Ltd.',
			'Experience in 3DsMax to build models, textures, lighting, motion adjustments, etc.',
			'Design the core gameplay and functions for the products and put it on the application platform such as google play and app store.'
		],
	}
];

const Experiences = (props) => {

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
		<section className={styles.experiences}>
			{experiencesList}
		</section>
	);
}

export default Experiences;