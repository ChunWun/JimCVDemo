import styles from "./Contact.module.css";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.text}>
				<PhoneIphoneIcon fontSize="large" color='action' />
				<p >0912540291</p>
			</div>
			<div className={styles.text}>
				<MailOutlineIcon fontSize="large" color='action' />
				<p >karta004941@gmail.com</p>
			</div>
			<div className={styles.text}>
				<LocationOnIcon fontSize="large" color='action' />
				<p >Taipei, Taiwan</p>
			</div>
		</div>
	);
}

export default Contact;