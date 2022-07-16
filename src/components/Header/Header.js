import React, { useState } from 'react';
import styles from "./Header.module.css";
import { Box } from '@mui/material';
import imgCode from "../../asset/CodeBackground.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = (props) => {
	const [isDropDownHit, setIsDropDownHit] = useState(false);

	const dropDownButtonStyle = (isDropDownHit) ? styles.dropDownButtonOn : styles.dropDownButtonOff;
	const linkboxStyle = (isDropDownHit) ? styles.linkBoxDrop : styles.linkBox;

	const onDropDownHitHandler = () => {
		setIsDropDownHit(!isDropDownHit);
	}

	return (
		<React.Fragment>
			<header className={styles.header}>
				<h1>Jim's&nbsp;CV</h1>

				<div className={styles.box}>
					<button className={dropDownButtonStyle} onClick={onDropDownHitHandler}>+</button>
					<Box className={linkboxStyle}>
						<a href='https://www.facebook.com/chunwun.huang/' target='_blank' rel="noreferrer">
							<div className={styles.icon}>
								<FacebookIcon fontSize="large" color='warning' />
							</div>
						</a>

						<a href='https://www.instagram.com/chunwun.huang/' target='_blank' rel="noreferrer">
							<div className={styles.icon}>
								<InstagramIcon fontSize="large" color='warning' />
							</div>
						</a>
						<a href='' target='_blank' rel="noreferrer">
							<div className={styles.icon}>
								<GitHubIcon fontSize="large" color='warning' />
							</div>
						</a>

						<a href='https://www.linkedin.com/in/jim-huang-397846190/' target='_blank' rel="noreferrer">
							<div className={styles.icon}>
								<LinkedInIcon fontSize="large" color='warning' />
							</div>
						</a>
					</Box>
				</div >
			</header>
			<div className={styles.mainImage}>
				<img src={imgCode} alt='A table full of delicious food!' />
			</div>
		</React.Fragment >
	)
}

export default Header;