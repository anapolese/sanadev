import PropTypes from "prop-types";
import { NavLink } from "../NavItem";

export const NavGroup = ( links ) => {
  return (
    <div className="nav-group">
      {links?.data?.map((link) => (
        <NavLink
          key={link.href}
          {...link}
        />
      ))}
    </div>
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
