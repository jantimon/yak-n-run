import { styled, keyframes } from "next-yak";
import { HeroController } from "./heroController";

export const Hero = () => (
  <HeroController
    className="
      w-[529px] h-[529px] border-none block
      bg-transparent
      bg-[url('./images/hero.avif')]
      scale-50
      animate-hero-run
      m-auto relative top-[-33px]
      z-[2]
      transition-transform duration-300 linear
      outline-none
      cursor-none
    "
  />
);