import styled from "styled-components";

export const ImagePanel = styled.div`
  max-height: 90vh;
  max-width: 900px;
  min-height: 90vh;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 50px 0 0 45px;
`;

export const ImageArea = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export const ContentPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 55px 48px 64px 48px;
  max-width: 700px;
`;

export const ContentWrapper = styled.div`
  width: min(100%, 632px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 20px;
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dark.brown3};
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: 20px;
  line-height: 1.2;
  width: 600px;
`;

export const Address = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.atendimento};
  font-size: 23px;
  line-height: 1.2;
  width: 300px;
`;

export const LinksRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
