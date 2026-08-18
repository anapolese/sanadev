import PropTypes from "prop-types";
import { NavigationLink } from "./styles";

export const NavLink = ({ 
  active = false,
  href,
  onClickHandler,
  title,
  }) => {
  return (
    <NavigationLink
      onClick={onClickHandler}
      href={href}
      className={`nav-link-${active ? "active" : ""}`}
    >
      {title}
    </NavigationLink>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
};
