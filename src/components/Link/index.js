import PropTypes from "prop-types";
import { ButtonLink as Link } from "./styles";

export const ButtonLink = ({ 
  active = false,
  href,
  onClickHandler,
  title,
  }) => {
  return (
    <Link
      onClick={onClickHandler}
      href={href}
      className={`nav-link-${active ? "active" : ""}`}
    >
      {title}
    </Link>
  );
};

ButtonLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
};
