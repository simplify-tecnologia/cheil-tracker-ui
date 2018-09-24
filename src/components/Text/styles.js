import styled, { css } from 'styled-components';
import { themeColor } from 'cheil-tracker-ui/utils';
import { fontFamily, fontSize, space, color, textAlign, display, style } from 'styled-system';

export const StyledText = styled.p`
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;

  ${fontFamily}
  ${fontSize}
  ${space}
  ${color}
  ${themeColor}
  ${textAlign}
  ${display}

  ${p =>
    p.thin &&
    css`
      font-weight: 300;
    `};

  ${p =>
    p.strong &&
    css`
      font-weight: 600;
    `};
`;
