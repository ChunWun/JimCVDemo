import styles from "./Contact.module.css";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contact = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.context}>
				<PhoneIphoneIcon fontSize="large" color='action' />
				<p >0912540291</p>
			</div>
			<div className={styles.context}>
				<MailOutlineIcon fontSize="large" color='action' />
				<p >karta004941@gmail.com</p>
			</div>

		</div>
	);
}

export default Contact;