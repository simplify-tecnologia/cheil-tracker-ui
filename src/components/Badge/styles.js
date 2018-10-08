import styled from 'styled-components';
import { themeColor } from 'cheil-tracker-ui/utils';
import { space, fontFamily } from 'styled-system';

export const StyledBadge = styled.span`
  cursor: default;
  border-radius: 2px;
  display: inline-block;
  font-size: 13px;
  line-height: 1.2rem;
  padding: 4px 12px;
  position: relative;
  text-transform: lowercase;

  ${space};
  ${fontFamily};
  ${themeColor};
`;
