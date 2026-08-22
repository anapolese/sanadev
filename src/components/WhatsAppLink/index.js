import PropTypes from "prop-types";
import WhatsAppIcon from "../../assets/images/WhatsApp/GreenWhatsApp.png";
import { ButtonLink as Link, Container } from "./styles";

export const WhatsAppLink = ({ 
  href,
  img,
  onClickHandler,
  }) => {
  return (
    <Container>
      <Link
        onClick={onClickHandler}
        href="https://wa.me/5551995492876"
        target="_blank"
      >
      <img src={WhatsAppIcon} alt="Icone WhatsApp" />
      </Link>
    </Container>
  );
};

WhatsAppLink.propTypes = {
  href: PropTypes.string.isRequired,
  img: PropTypes.string,
  onClickHandler: PropTypes.func,
};

export default WhatsAppLink;
