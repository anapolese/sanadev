import PropTypes from "prop-types";
import { Container, NavigationLink, Underline } from "./styles";

export const NavLink = ({ 
  active = false,
  href,
  onClickHandler,
  title,
  }) => {
  return (
    <Container id={`container-${title}`}>
      <NavigationLink
        onClick={onClickHandler}
        href={href}
        className={`nav-link-${active ? "active" : ""}`}
      >
        {title}
        <Underline className="underline" />
      </NavigationLink>
    </Container>
  );
};

NavLink.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func,
  title: PropTypes.string.isRequired,
};
