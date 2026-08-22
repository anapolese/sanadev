import PropTypes from "prop-types";
import { NavLink } from "../NavItem";
import { NavGroupContainer } from "./styles";

export const NavGroup = ({
  links,
  activeTitle,
  onItemClick,
  }) => {
  return (
    <NavGroupContainer id="nav-group-container" className="nav-group">
      {links.map((link) => (
        <NavLink
          key={link.href}
          {...link}
          active={activeTitle === link.title}
          onClickHandler={() => onItemClick?.(link.title)}
        />
      ))}
    </NavGroupContainer>
  );
};

NavGroup.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ).isRequired,
  activeTitle: PropTypes.string,
  onItemClick: PropTypes.func,
};
