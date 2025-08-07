import React from "react";
import styles from "./Footer.module.css";
import Icon from "../icon/Icon";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<h1 className={styles.tagline}>Design with empathy. Build with purpose.</h1>
				<div className={styles.social}>
					{/* <Icon url="https://www.behance.net/thomasmwaka" icon="behance" /> */}
					<Icon
						url="https://www.linkedin.com/in/blessherin-pangaribuan-840952341/"
						icon="linkedin"
					/>
					{/* <Icon url="https://twitter.com/_thomasmwaka" icon="twitter" /> */}
				</div>
			</div>
			<div className={styles.copyright}>
				<p>© {new Date().getFullYear()} Blessherin </p>
			</div>
		</footer>
	);
};

export default Footer;
