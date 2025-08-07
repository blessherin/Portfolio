import React from "react";

import Button from "../button/Button";
import Subtitle from "../subtitle/Subtitle";

import styles from "./HeroContent.module.css";

const HeroContent = () => {
	return (
		<div className={styles.content}>
			<Subtitle text="Intro" dataAos="fade-right" dataAosDuration="1700" />
			<h2
				className={styles.title}
				data-aos="fade-down"
				data-aos-duration="1600"
			>
				<span className={styles.greeting}>Hello</span> <br /> I&#39;m Blessherin 
				Pangaribuan
			</h2>
			<p
				className={styles.description}
				data-aos="fade-down"
				data-aos-duration="1600"
			>
				I am a dedicated UI/UX Designer with a strong interest in crafting user-centered designs for both web and mobile platforms. With a solid foundation in design tools such as Figma and Sketch, I strive to create intuitive, aesthetically pleasing interfaces that solve real user problems. 
				I value collaboration, continuous learning, and believe that impactful design is achieved through empathy and attention to detail. 


			</p>
			<Button
				title="Contact Me"
				url="/contact"
				dataAos="fade-up"
				dataAosDuration="2000"
			/>
		</div>
	);
};

export default HeroContent;
