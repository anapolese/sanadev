import styled from "styled-components";
import * as mixins from "../../../styles/mixins";

const NavGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 26px;
  width: max-content;

  ${mixins.mobile(`
    display: none;
  `)}
`;

export { NavGroupContainer };
