import Card from "../../UI/Card";
import SkillItem from "./SkillItem";
import styles from "./Skills.module.css";
import imgTS from "../../../asset/TS_logo.png";
import imgJS from "../../../asset/JS_logo.png";
import imgPixi from "../../../asset/Pixi_logo.png";
import imgReact from "../../../asset/React_logo.png";
import imgHtml from "../../../asset/HTML_logo.png";
import { useState } from "react";


const Skills = () => {

	const [skillID, setSkillID] = useState('s1');

	const SKILLS_LIST = [
		{
			id: 's1',
			name: 'TypeScripts',
			description: 'More than 2 years working experience on TypeScripts, and created several web games released online',
			imgUrl: imgTS
		},
		{
			id: 's2',
			name: 'Javascripts',
			description: 'Base on TypeScripts learning, and try build some side project games myself',
			imgUrl: imgJS
		},
		{
			id: 's3',
			name: 'Pixi.js',
			description: 'A web render tool that I used on my work, and have release somes products online',
			imgUrl: imgPixi
		},
		{
			id: 's4',
			name: 'React.js',
			description: 'Self-study through official websites and other resources, trying to make a personal website',
			imgUrl: imgReact
		},
		{
			id: 's5',
			name: 'HTML/CSS',
			description: 'In the process of making personal website gradually',
			imgUrl: imgHtml
		},
	]

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

	const onToggleHandler = (event) => {
		event.preventDefault();
		setSkillID(event.currentTarget.id);
	}

	const skillsList = SKILLS_LIST.map((skill) => {
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

	return (
		<div className={styles.background}>
			<div className={styles.skills}>
				{skillsList}
			</div>
			{showContext()}
		</div>
	);
}

export default Skills;