import styled from "styled-components";

const NavigationLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.colors.dark.brown0};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;
  font-weight: 400;
  white-space: nowrap;
  transition: opacity 0.2s ease;
`;

export { NavigationLink };