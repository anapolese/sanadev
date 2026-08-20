import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: min-content;

  ${mixins.lg(`
    gap: 15px;
  `)}

  ${mixins.xl(`
    gap: 20px;
  `)}
`;

export { GridArea };
