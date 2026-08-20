import Logo from "../../../assets/images/Logo_shadow.svg"
import {
  Container,
  LogoIcon,
  NavigationLink,
} from "./styles";

export const LogoArea = () => {
  return (
    <Container id="container-logo">
      <NavigationLink href="#home">
        <LogoIcon src={`${Logo}`} />
      </NavigationLink>
    </Container>
  );
};
