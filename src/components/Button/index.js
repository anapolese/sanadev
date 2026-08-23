import PropTypes from 'prop-types';
import { Button as Btn } from './styles';

export const Button = ({
  id,
  text,
  marginBottom,
  }) => {
  return (
    <Btn
      href="https://wa.me/5551995492876"
      target="_blank"
      id={id} 
      marginBottom={marginBottom}
    >
      {text}
    </Btn>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  marginBottom: PropTypes.string,
};
