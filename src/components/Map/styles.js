import styled from "styled-components";

export const MapFrame = styled.iframe`
  width: 600px;
  height: 360px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  loading: lazy;
  border: none;
  referrerPolicy: strict-origin-when-cross-origin;
`;
