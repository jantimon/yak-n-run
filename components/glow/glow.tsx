import React from "react";
import styles from "./glow.module.css"; // Import CSS Module

export const Glow = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.glowWrapper}>
      {" "}
      {/* Use imported style */}
      {children}
    </div>
  );
};
