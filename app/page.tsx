import { Level } from "../components/level/level";
import { Hero } from "../components/hero/hero";
import { CoinGroup } from "../components/coin/coin";
import { Glow } from "../components/glow/glow";

export default function Page() {
  return (
    <>
      <h1
        className="text-center text-[#eee]"
      >
        Yak'n'run
      </h1>
      <div
        className="
          justify-self-center
          w-[max(50%,_529px)]
          transition-all duration-300
          [--tw-ease:var(--transition-bounce)]
          hover:w-[90%]
          cursor-none
          mx-auto
        "
      >
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