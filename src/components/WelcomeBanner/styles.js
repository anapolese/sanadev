import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark.brown0};
`;

const BannerLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  margin-top: 24px;
`;

const BannerSection = styled.section`
  width: 100%;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 500px;
  padding: 40px;
`;

const BannerSubtitle = styled.p`
  margin: 12px 0 0;
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: 21px;
  font-weight: 300;
  line-height: 1.3;
`;

const BannerTitle = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 36px;
  letter-spacing: -8%;
  font-weight: 200;
  line-height: 1.2;
  white-space: normal;
`;

export {
  BannerContainer,
  BannerLinks,
  BannerSection,
  BannerSubtitle,
  BannerTitle,
};
