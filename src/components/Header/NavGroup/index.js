import PropTypes from "prop-types";
import { NavLink } from "../NavItem";
import { NavGroupContainer } from "./styles";

export const NavGroup = ({ links }) => {
  return (
    <NavGroupContainer id="nav-group-container" className="nav-group">
      {links.map((link) => (
        <NavLink
          key={link.href}
          {...link}
        />
      ))}
    </NavGroupContainer>
  );
};

NavGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
};
