import React from "react";
import styles from "./coin.module.css";

export const Coin = ({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => <div className={`${styles.coin} ${className}`} style={style} />;

export const CoinGroup = ({ count }: { count: number }) => (
  <div className={styles.coinGroup}>
    {Array.from({ length: count }, (_, i) => (
      <Coin
        key={i}
        // Apply dynamic animation delay via inline style prop
        style={{ animationDelay: `${(i * -5) / 100}s` }}
      />
    ))}
  </div>
);
