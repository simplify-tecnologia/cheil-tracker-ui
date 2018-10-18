import styled, { css } from 'styled-components';
import { fluid, hover, disabled, loading, borders } from 'cheil-tracker-ui/utils';
import {
  color,
  space,
  height,
  boxShadow,
  fontFamily,
  fontWeight,
  backgroundImage,
  fontSize,
  themeGet,
} from 'styled-system';

const icon = css`
  & .icon {
    margin: 0 5px 0 0;
    ${fontSize};
  }
  &.icon-reverse {
    & .icon {
      margin: 0 0 0 5px;
    }
  }
  &.icon-only {
    padding: 0px 0.4em;
    & .icon {
      margin: 0;
    }
  }
`;

const outlined = p => {
  if (!p.outlined) return;
  const c = themeGet(`colors.${p.bg}`);

  return css`
    color: ${c};
    border-color: ${c};
    background: transparent;
  `;
};

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;
  cursor: pointer;

  ${p =>
    p.static &&
    css`
      pointer-events: none;
    `}

  ${icon}
  ${color}
  ${space}
  ${height}
  ${backgroundImage}
  ${borders}
  ${outlined}
  ${boxShadow}
  ${fluid}
  ${disabled}
  ${loading}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${hover}
`;
