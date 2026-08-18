import PropTypes from "prop-types";
import { NavGroup } from "./NavGroup";

export const Header = (  ) => {
  const leftLinks = [
    { label: "HOME", href: "#home", active: true },
    { label: "HISTÓRIA", href: "#historia" },
  ];

  const rightLinks = [
    { label: "TRATAMENTOS", href: "#tratamentos" },
    { label: "ATENDIMENTO", href: "#atendimento" },
  ];

  return (
    <header className="site-header">
      <nav className="navbar">
        <NavGroup links={leftLinks} />

        <NavGroup links={rightLinks} />
      </nav>
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.string.isRequired,
};
