import styled, { keyframes } from "styled-components";

const smoothBlink = keyframes`
  0%, 100% { opacity: 1; width: 120px; }
  50% { opacity: 0.5; width: 100px; }
`;

export const LoaderWidgetContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #ffe3cc;
`;

export const LogoImg = styled.img`
  height: auto;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  animation: ${smoothBlink} 1.62s linear infinite;
`;