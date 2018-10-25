import styled from 'styled-components';
import { space } from 'styled-system';

export const StyledAvatarGroup = styled.div`
  > div {
    margin-left: -18px;
  }
  > div:first-child {
    margin-left: 0;
  }

  ${space};
`;
