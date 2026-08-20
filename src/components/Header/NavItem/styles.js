import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 235px;
  height: 35px;
  min-width: 235px;
  max-width: 235px;
`;

const NavigationLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
  text-decoration: none;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.2;

  &:hover,
  &.nav-link-active {
    filter: drop-shadow(0px 2px 1px rgba(53, 24, 0, 0.2));

    .underline {
      opacity: 1;
    }
  }
`;

const Underline = styled.span`
  display: block;
  width: 15px;
  height: 3px;
  background: ${({ theme }) => theme.colors.dark.brown0};
  opacity: 0;
  transition: opacity 0.2s ease;
  filter: drop-shadow(0px 2px 4px rgba(31, 29, 28, 0.63));
`;

export { Container, NavigationLink, Underline };
