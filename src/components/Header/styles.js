import styled from "styled-components";
import * as mixins from '../../styles/mixins';

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
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100px;

  ${mixins.md(`
    height: 140px;
  `)}

  ${mixins.lg(`
    height: 180px;
  `)}
`;

export { NavBar, PageHeader };