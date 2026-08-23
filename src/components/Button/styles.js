import styled from "styled-components";

export const Button = styled.a`
  margin-bottom: ${({ marginBottom }) => marginBottom || "5px"};
  border-radius: 35px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px 25px;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 20px;
  line-height: 1.1;
  font-weight: 400;
  text-decoration: none;
  border: solid 2px ${({ theme }) => theme.colors.dark.brown0};

  &:hover {
		transform: scale(1.03);
    filter: box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	}
`;
