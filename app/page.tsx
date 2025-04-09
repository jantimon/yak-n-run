import { Level } from "../components/level/level";
import { Hero } from "../components/hero/hero";
import { CoinGroup } from "../components/coin/coin";
import { Glow } from "../components/glow/glow";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <h1 className={styles.title}>Yak&apos;n&apos;run</h1>
      <div className={styles.container}>
        <Glow>
          <Level>
            <CoinGroup count={4} />
            <Hero />
          </Level>
        </Glow>
      </div>
    </>
  );
}
