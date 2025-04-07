/** @jsxImportSource next-yak */
import "./global.css";
import { css } from "next-yak";
import { Level } from "../components/level/level";
import { Hero } from "../components/hero/hero";

export default function Page() {
  return (
    <>
      <h1>Yak&apos;n&apos;run</h1>
      <div
        css={css`
          justify-self: center;
          width: max(50%, 529px);
          transition: width 0.3s ${easing};
          &:hover {
            width: 90%;
          }
          cursor: none;
        `}
      >
        <Level>
          <Hero />
        </Level>
      </div>
    </>
  );
}

/** Bounce */
const easing =
  "linear(0,0.01,0.04 1.6%,0.161 3.3%,0.816 9.4%,1.046,1.189 14.4%,1.231,1.254 17%,1.259,1.257 18.6%,1.236,1.194 22.3%,1.057 27%,0.999 29.4%,0.955 32.1%,0.942,0.935 34.9%,0.933,0.939 38.4%,1 47.3%,1.011,1.017 52.6%,1.016 56.4%,1 65.2%,0.996 70.2%,1.001 87.2%,1)";
