import Card from "../../UI/Card";
import SkillItem from "./SkillItem";
import styles from "./Skills.module.css";
import imgTS from "../../../asset/TS_logo.png";
import imgJS from "../../../asset/JS_logo.png";
import imgPixi from "../../../asset/Pixi_logo.png";
import imgReact from "../../../asset/React_logo.png";
import imgHtml from "../../../asset/HTML_logo.png";

const Skills = () => {

	const SKILLS_LIST = [
		{
			id: 's1',
			name: 'TypeScripts',
			description: '',
			imgUrl: imgTS
		},
		{
			id: 's2',
			name: 'Javascripts',
			description: '',
			imgUrl: imgJS
		},
		{
			id: 's3',
			name: 'Pixi.js',
			description: '',
			imgUrl: imgPixi
		},
		{
			id: 's4',
			name: 'React.js',
			description: '',
			imgUrl: imgReact
		},
		{
			id: 's5',
			name: 'HTML/CSS',
			description: '',
			imgUrl: imgHtml
		},
	]

	const skillsList = SKILLS_LIST.map((skill) => {
		return (
			<Card key={skill.id}>
				<SkillItem
					id={skill.id}
					name={skill.name}
					description={skill.description}
					imgUrl={skill.imgUrl}
				></SkillItem>
			</Card>
		);
	});

	return (
		<div className={styles.skills}>
			{skillsList}
		</div>
	);
}

export default Skills;