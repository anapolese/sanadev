import { ButtonLink } from "../Link";
import {
  BannerContainer,
  BannerLinks,
  BannerSection,
  BannerSubtitle,
  BannerTitle,
} from "./styles";

export const WelcomeBanner = () => {
  const title = "uma experiência sensorial e terapêutica de corpo e alma";
  const subtitle = "O cuidado começa quando você se escolhe.";
  const links = [
    { title: "TRATAMENTOS", href: "#tratamentos" },
    { title: "ATENDIMENTO", href: "#atendimento" },
  ];

  const capitalizeAll = (text) => (typeof text === "string" ? text.toUpperCase() : text);

  return (
    <BannerSection id="welcome-banner">
      <BannerContainer id="banner-container">
        <BannerTitle id="banner-title">{capitalizeAll(title)}</BannerTitle>
        <BannerSubtitle id="banner-subtitle">
          {subtitle}
        </BannerSubtitle>
        <BannerLinks id="banner-links">
          {links.map((links) => (
            <ButtonLink
              key={links.href}
              {...links}
            />
          ))}
        </BannerLinks>
      </BannerContainer>
    </BannerSection>
  );
};
