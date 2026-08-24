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

  ${mixins.mobile(`
    position: relative;
    justify-content: center;
    padding: 0 48px;
  `)}
`;

const MenuButton = styled.button`
  position: absolute;
  left: 16px;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: #ffc493;
  color: ${({ theme }) => theme.colors.dark.brown0};
  transform: translateY(-50%);
  cursor: pointer;

  ${mixins.md(`
    display: none;
  `)}

  ${mixins.lg(`
    display: none;
  `)}

  ${mixins.xl(`
    display: none;
  `)}

  ${mixins.xxl(`
    display: none;
  `)}
`;

const MenuIcon = styled.span`
  width: 15px;
  height: 10px;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    width: 10px;
    border-top: 2px solid currentColor;
  }
`;

const MobileMenu = styled.div`
  display: none;

  ${mixins.mobile(`
    position: absolute;
    top: 100%;
    left: 16px;
    right: 16px;
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    gap: 14px;
    padding: 18px;
    background: rgba(255, 227, 204, 0.97);
    box-shadow: 0 4px 10px rgba(53, 24, 0, 0.14);

    .nav-group {
      display: flex;
      flex-direction: column;
      gap: 14px;
      width: 100%;
    }
  `)}
`;

const PageHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

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

export { MenuButton, MenuIcon, MobileMenu, NavBar, PageHeader };