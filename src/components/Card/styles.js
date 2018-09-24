import styled from 'styled-components';
import { flexbox, borders, themeColor } from 'cheil-tracker-ui/utils';
import {
  color,
  space,
  boxShadow,
  style,
  textAlign,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,
} from 'styled-system';

const borderLeftColor = style({
  prop: 'borderLeftColor',
  cssProperty: 'borderLeftColor',
  key: 'colors',
});

export const StyledCard = styled.div`
  display: flex;
  position: relative;

  ${space}
  ${boxShadow}
  ${color}
  ${themeColor}
  ${borders}
  ${borderLeftColor}
  ${textAlign}
  ${flexbox}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
`;
