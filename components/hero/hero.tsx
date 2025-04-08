import { styled, keyframes } from "next-yak";
import { HeroController } from "./heroController";

// Sprite mapping
const runAnimation = keyframes`
  0% {
    background-position: -10px -10px;
  }
  5.88% {
    background-position: -1108px -1048px;
  }
  11.76% {
    background-position: -559px -1567px;
  }
  17.64% {
    background-position: -559px -529px;
  }
  23.52% {
    background-position: -1657px -1048px;
  }
  29.4% {
    background-position: -559px -1048px;
  }
  35.28% {
    background-position: -559px -10px;
  }
  41.16% {
    background-position: -1108px -10px;
  }
  47.04% {
    background-position: -10px -529px;
  }
  52.92% {
    background-position: -1657px -1567px;
  }
  58.8% {
    background-position: -2206px -10px;
  }
  64.68% {
    background-position: -1108px -1567px;
  }
  70.56% {
    background-position: -1657px -529px;
  }
  76.44% {
    background-position: -10px -1567px;
  }
  82.32% {
    background-position: -1657px -10px;
  }
  88.2% {
    background-position: -10px -1048px;
  }
  94.08% {
    background-position: -1108px -529px;
  }
  100% {
    background-position: -10px -10px;
  }
`;

export const Hero = styled(HeroController)`
  width: 529px;
  height: 529px;
  border: none;
  display: block;
  background: url("./images/hero.avif");
  transform: scale(0.5);
  animation: ${runAnimation} 1s steps(1) infinite;
  animation-play-state: running;
  margin: 0 auto;
  position: relative;
  top: -33px;
  z-index: 2;
  transition: translate 0.3s linear;
  outline: none;
  cursor: none;
`;
