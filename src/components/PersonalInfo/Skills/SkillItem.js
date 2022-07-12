import styles from "./SkillItem.module.css";

const SkillItem = (props) => {

	const imgStyle = (props.isToggle) ? styles.mainImageToggle : styles.mainImage;

	return (
		<div className={styles.skillItem}>
			<div className={imgStyle}>
				<img src={props.imgUrl} alt='skill toggle' />
			</div>
		</div>
	);
}

export default SkillItem;