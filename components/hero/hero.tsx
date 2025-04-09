import React from "react";
import { HeroController } from "./heroController";
import styles from "./hero.module.css"; // Import CSS Module

export const Hero = () => (
  <HeroController className={styles.hero} /> // Pass the CSS Module class
);
