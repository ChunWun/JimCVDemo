import styles from "./SkillItem.module.css";

const SkillItem = (props) => {

	const imgStyle = (props.isToggle) ? styles.mainImageToggleOn : styles.mainImageToggleOff;

	return (
		<div className={styles.skillItem}>
			<div className={imgStyle}>
				<img src={props.imgUrl} alt='skill toggle' />
			</div>
		</div>
	);
}

export default SkillItem;