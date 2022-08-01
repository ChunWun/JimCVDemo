import Card from "../../UI/Card";
import SkillItem from "./SkillItem";
import styles from "./Skills.module.css";
import imgTS from "../../../asset/TS_logo.png";
import imgJS from "../../../asset/JS_logo.png";
import imgPixi from "../../../asset/Pixi_logo.png";
import imgReact from "../../../asset/React_logo.png";
import imgHtml from "../../../asset/HTML_logo.png";
import React, { useState } from "react";


const STEPPER_NEXT = 'NEXT';
const STEPPER_PREV = 'PREV';

const SKILLS_LIST = [
	{
		id: 's1',
		name: 'TypeScripts',
		description: <p>More than 2 years working experience on TypeScripts, and created several web games released online</p>,
		imgUrl: imgTS
	},
	{
		id: 's2',
		name: 'Javascripts',
		description: <p>Base on TypeScripts learning, and try build some side project games myself</p>,
		imgUrl: imgJS
	},
	{
		id: 's3',
		name: 'Pixi.js',
		description: <p>A web render tool that I used on my work, and have release somes products online</p>,
		imgUrl: imgPixi
	},
	{
		id: 's4',
		name: 'React.js',
		description: <p>Self-study through official websites and other resources, trying to make a personal website</p>,
		imgUrl: imgReact
	},
	{
		id: 's5',
		name: 'HTML/CSS',
		description: <p>In the process of making personal website gradually</p>,
		imgUrl: imgHtml
	},
]

const Skills = () => {
	const [skillID, setSkillID] = useState('s1');

	const onToggleHandler = (event) => {
		event.preventDefault();
		setSkillID(event.currentTarget.id);
	}

	const onSkillSwitchHandler = (event) => {
		const index = SKILLS_LIST.findIndex(skill => {
			return (skill.id === skillID)
		})

		let newIndex = (event.currentTarget.id === STEPPER_NEXT) ? index + 1 : index - 1;
		newIndex = (newIndex > SKILLS_LIST.length - 1) ? 0 : newIndex;
		newIndex = (newIndex < 0) ? SKILLS_LIST.length - 1 : newIndex;

		setSkillID(SKILLS_LIST[newIndex].id);
	}

	const showSkills = () => {
		const skillsButtons = SKILLS_LIST.map((skill) => {
			return (
				<button className={styles.button} onClick={onToggleHandler} id={skill.id} key={skill.id}>
					<Card key={skill.id}>
						<SkillItem
							id={skill.id}
							name={skill.name}
							imgUrl={skill.imgUrl}
							isToggle={(skillID === skill.id)}
						></SkillItem>
					</Card>
				</button>
			);
		});

		const skillsSwitch = () => {
			const currentSkill = SKILLS_LIST.find(skill => {
				return (skill.id === skillID)
			})

			return (
				<React.Fragment>
					<button className={styles.stepper} onClick={onSkillSwitchHandler} id={STEPPER_PREV}> ◀ </button>
					<Card >
						<div className={styles.switchCard}>
							<img src={currentSkill.imgUrl} alt='skill switch' />
						</div>
					</Card>
					<button className={styles.stepper} onClick={onSkillSwitchHandler} id={STEPPER_NEXT}> ▶ </button>
				</React.Fragment>
			);
		};

		return (
			<React.Fragment>
				<div className={styles.skillsButtons}>
					{skillsButtons}
				</div>
				<div className={styles.skillsSwitch}>
					{skillsSwitch()}
				</div>
			</React.Fragment>
		)
	}

	const showContext = () => {
		const skillDescription = SKILLS_LIST.find(skill => {
			return (skill.id === skillID)
		})

		return (
			<div className={styles.context}>
				<p>
					{skillDescription.description}
				</p>
			</div>
		)
	}

	return (
		<div className={styles.background}>
			{showSkills()}
			{showContext()}
		</div>
	);
}

export default Skills;