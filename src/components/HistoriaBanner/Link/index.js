import PropTypes from "prop-types";
import { BtnContainer, ButtonLink as Link } from "./styles";

export const ButtonLink = ({ 
  href,
  img,
  imgDescription,
  onClickHandler,
  title,
  width
  }) => {
  return (
    <BtnContainer>
      <Link
        onClick={onClickHandler}
        href={href}
        width={width}
      >
        <img src={img} alt={imgDescription} />
        {title}
      </Link>
    </BtnContainer>
  );
};

ButtonLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  img: PropTypes.string,
  imgDescription: PropTypes.string,
  onClickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
};
