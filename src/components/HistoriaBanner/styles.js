import styled from "styled-components";
import Image from "../../assets/images/Image.png";

export const ImagePanel = styled.div`
  min-height: 100vh;
  border-radius: 5px;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
`;

export const ContentPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px 48px;
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

export const Title = styled.h2`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.dark.brown0};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 46px;
  line-height: 1.1;
  font-weight: 400;
`;

export const Description = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.dark.brown2};
  font-family: ${({ theme }) => theme.fonts.description};
  font-size: 26px;
  line-height: 1.2;
`;

export const LinksRow = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
`;
