import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { themeColor } from 'cheil-tracker-ui/utils';
import { size, fontSize, themeGet } from 'styled-system';

const circular = p => {
  if (!p.circular) return;
  return css`
    border-radius: 999px;
  `;
};

export const StyledIcon = styled.i.attrs({
  color: p => (p.inverted ? p.bg || 'white' : p.color),
  bg: p => (p.inverted ? p.color : p.bg),
})`
  display: inline-flex !important;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  line-height: 1.5;
  ${themeColor}
  ${size}
  ${fontSize}
  ${circular}
`;
