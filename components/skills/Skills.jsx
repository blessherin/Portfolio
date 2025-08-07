import React from "react";
import Button from "../button/Button";
import Skill from "../skill/Skill";
import styles from "./Skills.module.css";

import { skills } from "../../data/skills";
import Subtitle from "../subtitle/Subtitle";

const Skills = () => {
	return (
		<section className={styles.skills}>
			<div className={styles.container}>
				<div className={styles.skillsContainer}>
					{skills.map((skill) => (
						<Skill key={skill.index} skill={skill} />
					))}
				</div>
				<div
					className={styles.content}
					data-aos="fade-left"
					data-aos-duration="1800"
				>
					<Subtitle text="My Skills" />
					<h2 className={styles.title}>
					Driven by Design, Focused on Results <br /> 
					</h2>
					<p className={styles.description}>
					I always start by understanding what users need and what the business wants to achieve. 
					From there, I create designs that are easy to use, look good, and actually help people. 
					It&apos;s all about making things better for users and helping your product grow.
						<br />
						<br />
						My design practice combines design thinking, user research, and
						experience strategy, all with a relentless focus on the user.
					</p>
					<Button
						target="_blank"
						url="https://drive.google.com/file/d/1DFiy5FJz2xdLoqhZPLrRidpk851ngBPo/view?usp=sharing"
						title="Download CV"
						download
					/>
				</div>
			</div>
		</section>
	);
};

export default Skills;
