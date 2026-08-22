import PropTypes from 'prop-types';
import { SubtitlePiece } from './styles';

export const Subtitle = ({
  id,
  text,
  }) => {
  return (
    <SubtitlePiece id={id}>
      {text}
    </SubtitlePiece>
  );
};

Subtitle.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
};
