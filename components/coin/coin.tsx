/** @jsxImportSource next-yak */
import { css, keyframes, styled } from "next-yak";

const spin = keyframes`
    0% {
        background-position: -39px -0px;
    }
    20% {
        background-position: -36px -42px;
    }
    40% {
        background-position: -81px -42px;
    }
    60% {
        background-position: -0px -0px;
    }
    80% {
        background-position: -81px -0px;
    }
    100% {
        background-position: 9px -42px;
    }
`;

export const Coin = styled.div`
  width: 38px;
  height: 38px;
  background: url("./images/coin.avif") no-repeat center center;
  animation-play-state: paused;
  pointer-events: none;
  z-index: 1;
  animation: ${spin} 0.7s steps(1) infinite;
`;

const flyThrough = keyframes`
    0% {
        transform: translateX(100cqw);
    }
    100% {
        transform: translateX(-100%);
    }
`;

export const CoinGroup = ({ count }: { count: number }) => (
  <div
    css={css`
      position: absolute;
      top: 50px;
      left: -180px;
      display: flex;
      gap: 5px;
      animation: ${flyThrough} 3s linear infinite;
    `}
  >
    {Array.from({ length: count }, (_, i) => (
      <Coin
        key={i}
        css={css`
          animation-delay: ${() => (i * -5) / 100}s;
        `}
      />
    ))}
  </div>
);
