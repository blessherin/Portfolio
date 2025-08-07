import React, { useEffect } from "react";
import Link from "next/link";



import styles from "./Button.module.css";

export const ButtonForm = ({ title, url, type = "button", download, target }) => {
	if (url) {
		return (
			<Link href={url}>
				<a className={styles.btn} download={download} target={target}>
					{title}
				</a>
			</Link>
		);
	}

	return (
		<button className={styles.btn} type={type}>
			{title}
		</button>
	);
};


const Button = ({ title, url, dataAos, dataAosDuration, download, target }) => {
	
	return (
		<Link href={`${url}`} >
			<a className={styles.btn} download={download} target={target}>{title}</a>
		</Link>
	);
};

export default Button;
