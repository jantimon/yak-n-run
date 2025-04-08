import React from "react";
import { styled, keyframes } from "next-yak";

export const Level = ({ children }: { children: React.ReactNode }) => (
  <Back className="level">
    <TreesBack>
      <TreesFront>{children}</TreesFront>
    </TreesBack>
  </Back>
);

const xTransformAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1px * var(--moveX)));
  }
`;

const cloudsOriginalWidth = 752;
const cloudsOriginalHeight = 500;
const cloudsHeight = 150;

const groundOriginalWidth = 1533;
const groundOriginalHeight = 225;
const groundHeight = 50;

const treesOriginalWidth = 1433;
const treesOriginalHeight = 672;
const treesHeight = 150;

const treesFrontOriginalWidth = 2259;
const treesFrontOriginalHeight = 1000;
const treesFrontHeight = 150;

const Back = styled.div`
  container-type: inline-size;
  width: 100%;
  overflow: clip;
  background: #7ea4ad;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: -30px;
    display: block;
    background: url("./images/clouds.avif");
    height: ${cloudsHeight}px;
    width: max(200%, ${cloudsOriginalWidth * 2}px);
    --moveX: ${(cloudsOriginalWidth / cloudsOriginalHeight) * cloudsHeight};
    animation: ${xTransformAnimation} 30s linear infinite;
    background-size: auto 100%;
  }

  &:after {
    margin-top: -230px;
    content: "";
    display: block;
    background: url("./images/bottom.avif");
    height: ${groundHeight}px;
    width: max(200%, ${groundOriginalWidth * 2}px);
    --moveX: ${(groundOriginalWidth / groundOriginalHeight) * groundHeight};
    animation: ${xTransformAnimation} 1s linear infinite;
    background-size: auto 100%;
  }
`;

const TreesBack = styled.div`
  &:before {
    content: "";
    position: absolute;
    top: 60px;
    display: block;
    background: url("./images/trees-back.avif");
    width: max(200%, ${treesOriginalWidth * 2}px);
    height: ${treesHeight}px;
    --moveX: ${(treesOriginalWidth / treesOriginalHeight) * treesHeight};
    animation: ${xTransformAnimation} 20s linear infinite;
    background-size: auto 100%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 150px;
    display: block;
    background: url("./images/trees-back.avif");
    width: max(200%, ${treesOriginalWidth * 2}px);
    height: ${treesHeight}px;
    --moveX: ${(treesOriginalWidth / treesOriginalHeight) * treesHeight};
    background-size: auto 100%;
    animation: ${xTransformAnimation} 15s linear infinite;
    animation-delay: -0.5s;
  }
`;

const TreesFront = styled.div`
  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 160px;
    display: block;
    background: url("./images/trees-front.avif");
    width: max(200%, ${treesFrontOriginalWidth * 2}px);
    height: ${treesFrontHeight}px;
    --moveX: ${(treesFrontOriginalWidth / treesFrontOriginalHeight) *
    treesFrontHeight};
    background-size: auto 100%;
    animation: ${xTransformAnimation} 5s linear infinite;
  }
`;
