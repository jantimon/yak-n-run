import { keyframes, styled } from "next-yak";

const rotate = keyframes`
  0% {  
    box-shadow: 0px -25px 105px 0px rgba(45, 171, 255, 0.4);
  }
  100% {
    box-shadow: 0px -25px 105px 0px rgba(45, 171, 255,0.6);  
  }
`;

const GlowWrapper = styled.div`
  &:focus-within {
    animation: ${rotate} 2s infinite alternate;
  }
`;

export const Glow = ({ children }) => {
  return <GlowWrapper>{children}</GlowWrapper>;
};
