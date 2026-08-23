import styled from "styled-components";
import * as mixins from "../../styles/mixins";

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
`;

const PageHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  height: ${({ compact }) => (compact ? "var(--header-height-compact)" : "var(--header-height)")};
  background: ${({ compact }) => (compact ? "rgba(242, 225, 211, 0.38)" : "transparent")};
  box-shadow: ${({ compact }) => (compact ? "0 2px 7px rgba(255, 199, 153)" : "none")};
  backdrop-filter: ${({ compact }) => (compact ? "blur(6px)" : "none")};
  transition: height 0.25s ease, background 0.25s ease, box-shadow 0.25s ease, backdrop-filter 0.25s ease;

  ${mixins.md(`
    --header-height-compact: 90px;
    --header-height: 150px;
  `)}

  ${mixins.lg(`
    --header-height: 180px;
  `)}

  ${mixins.xxl(`
    --header-height-compact: 95px;
    --header-height: 180px;
  `)}
`;

export { NavBar, PageHeader };