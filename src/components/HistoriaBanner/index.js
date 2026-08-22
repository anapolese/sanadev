import PropTypes from 'prop-types';
import { ButtonLink } from './Link';
import {
  ContentPanel,
  ContentWrapper,
  Description,
  ImagePanel,
  LinksRow,
  Title,
} from './styles';
import { capitalizeAll } from '../../utils/utils';

export const HistoriaBanner = ({
  imgDescription,
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  links = [],
  }) => {
  return (
    <>
      <ImagePanel aria-label={imgDescription} />
      <ContentPanel id="content-panel">
        <ContentWrapper id="content-wrapper">
          <Title>{capitalizeAll(title)}</Title>

          <Description>{paragraph1}</Description>
          <Description>{paragraph2}</Description>
          <Description>{paragraph3}</Description>

          <LinksRow>
            {links.map((link) => (
              <ButtonLink key={link.href} {...link} />
            ))}
          </LinksRow>
        </ContentWrapper>
      </ContentPanel>
    </>
  );
};

HistoriaBanner.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  paragraph3: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
};