import React from "react";
import styles from "./level.module.css"; // Import the revised CSS Module

export const Level = ({ children }: { children: React.ReactNode }) => (
  // Outermost div, replicating 'Back' component
  // Add the 'level' class manually for heroController's .closest()
  <div className={`${styles.back} level`}>
    {/* Clouds and Ground are handled by ::before and ::after on styles.back */}

    {/* Div replicating 'TreesBack' component */}
    <div className={styles.treesBack}>
      {/* Back Tree layers handled by ::before and ::after on styles.treesBack */}

      {/* Div replicating 'TreesFront' component */}
      {/* This div contains the actual children (Hero, Coins) */}
      <div className={styles.treesFront}>
        {/* Front Tree layer handled by ::after on styles.treesFront */}
        {children} {/* Render Hero and Coins here */}
      </div>
    </div>
  </div>
);
