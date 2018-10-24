import styled from 'styled-components';
import { fontFamily, fontSize, color, space, size } from 'styled-system';

export const StyledAvatar = styled.div`
  align-items: center;
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16), 0 2px 2px 0 rgba(0, 0, 0, 0.16),
    0 1px 3px 0 rgba(0, 0, 0, 0.16);
  display: inline-flex;
  font-weight: 600;
  justify-content: center;
  line-height: 1;

  ${fontFamily};
  ${fontSize};
  ${color};
  ${size};
  ${space};
`;
