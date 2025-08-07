import React from "react";
import Image from "next/image";

import hero from "../../public/assets/bless.png";
import figma from "../../public/assets/figma.png";
import bals from "../../public/assets/bals.png";
import canva from "../../public/assets/canva.png";
import frmr from "../../public/assets/frmr.png";

import styles from "./HeroImage.module.css";

const HeroImage = () => {
	return (
		<div
			className={styles.container}
			data-aos="zoom-in"
			data-aos-duration="2200"
		>
			<div className={styles.image}>
				<Image
					src={hero}
					alt="Blessherin Pangaribuan"
					data-aos="fade-up"
					data-aos-duration="2400"
					className={styles.heroImage}
				/>
				<div
					className={styles.figma}
					data-aos="fade-right"
					data-aos-duration="2400"
				>
					<Image src={figma} alt="Figma" />
				</div>
				<div
					className={styles.bals}
					data-aos="fade-right"
					data-aos-duration="2400"
				>
					<Image src={bals} alt="bals.png" />
				</div>
				<div
					className={styles.canva}
					data-aos="fade-right"
					data-aos-duration="2400"
				>
					<Image src={canva} alt="canva.png" />
				</div>
				<div
					className={styles.frmr}
					data-aos="fade-left"
					data-aos-duration="2400"
				>
					<Image src={frmr} alt="frmr.png" />
				</div>
			</div>
		</div>
	);
};

export default HeroImage;
