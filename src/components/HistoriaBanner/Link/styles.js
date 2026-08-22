import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  width: 200px;
`;

export const ButtonLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.variable};
  letter-spacing: 0.5px;
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;

  &:hover,
  &.nav-link-active {
    filter: drop-shadow(0px 2px 1px rgba(53, 24, 0, 0.2));
  }
`;
