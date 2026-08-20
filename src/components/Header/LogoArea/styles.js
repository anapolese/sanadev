import styled from "styled-components";
import * as mixins from '../../../styles/mixins';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2;
  width: 100%;
  max-width: 235px;
`;

const LogoIcon = styled.img`
  display: block;
  width: 100%;
  height: auto;
  max-width: 180px;

  ${mixins.lg(`
    width: 153px;
  `)}

  ${mixins.xl(`
    width: 165px;
  `)}

  ${mixins.xxl(`
    width: 180px;
  `)}
`;

const NavigationLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
`;

export { Container, LogoIcon, NavigationLink };
