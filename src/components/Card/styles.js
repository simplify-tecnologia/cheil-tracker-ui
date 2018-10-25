import styled from 'styled-components';
import { flexbox, borders } from 'cheil-tracker-ui/utils';
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
  overflow: hidden;

  ${space}
  ${boxShadow}
  ${color}
  ${borders}
  ${borderLeftColor}
  ${textAlign}
  ${flexbox}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
`;
