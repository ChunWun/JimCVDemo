import Package from "../../../package.json";
import styles from "./PageInfo.module.css";

const PageInfo = () => {
	const version = Package.version;

	return (
		<span className={styles.version}>
			Ver&nbsp;{version}
		</span>
	);
}

export default PageInfo;