import styles from "./SkillItem.module.css";

const SkillItem = (props) => {
	return (
		<div className={styles.skillItem}>


			<div className={styles.mainImage}>
				<img src={props.imgUrl} alt='A table full of delicious food!' />
			</div>
			<div>
				{props.name}
				{props.description}
			</div>
		</div>
	);
}

export default SkillItem;