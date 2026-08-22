import PropTypes from "prop-types";
import { ButtonLink } from "./Link";
import {
  BannerContainer,
  BannerLinks,
  BannerSection,
  BannerSubtitle,
  BannerTitle,
} from "./styles";
import { capitalizeAll } from "../../utils/utils";

export const WelcomeBanner = ({ title, subtitle, links = [] }) => {
  return (
    <BannerSection id="welcome-banner">
      <BannerContainer id="banner-container">
        <BannerTitle id="banner-title">{capitalizeAll(title)}</BannerTitle>
        <BannerSubtitle id="banner-subtitle">{subtitle}</BannerSubtitle>
        <BannerLinks id="banner-links">
          {links.map((link) => (
            <ButtonLink key={link.href} {...link} />
          ))}
        </BannerLinks>
      </BannerContainer>
    </BannerSection>
  );
};

WelcomeBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};
