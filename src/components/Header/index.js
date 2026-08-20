import { LogoArea } from "./LogoArea";
import { NavGroup } from "./NavGroup";
import {
  NavBar,
  PageHeader
} from "./styles";

export const Header = (  ) => {
  const leftLinks = [
    { title: "HOME", href: "/", active: true },
    { title: "HISTÓRIA", href: "#historia" },
  ];

  const rightLinks = [
    { title: "TRATAMENTOS", href: "#tratamentos" },
    { title: "ATENDIMENTO", href: "#atendimento" },
  ];

  return (
    <PageHeader className="site-header">
      <NavBar className="navbar">
        <NavGroup links={leftLinks} />
        <LogoArea />
        <NavGroup links={rightLinks} />
      </NavBar>
    </PageHeader>
  );
};
