import styled, { css } from 'styled-components';
import { fluid } from 'cheil-tracker-ui/utils';
import {
  fontFamily,
  fontSize,
  color,
  space,
  width,
  borderRadius,
  borderColor,
} from 'styled-system';

import Select from 'react-select';

export const SelectContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: column;

  ${space};
  ${width};
  ${fluid};
`;

export const StyledSelect = styled(Select)`
  width: 100%;

  ${fontFamily};
  ${fontSize};

  .select__control {
    border: 0;
    min-height: ${props => props.height}px;

    ${borderRadius};
    ${color};

    ${p =>
      p.shadow
        ? css`
            box-shadow: ${p.theme.shadows.normal};
          `
        : css`
            box-shadow: none;
            border: 1px solid;
            ${borderColor};
          `};

    ${p =>
      p.isValid &&
      css`
        border-color: ${p.theme.colors.danger};
      `};

    .select__value-container {
      padding: 1px 8px;
    }
  }

  .select__indicator {
    padding: 6px;
  }

  .select__indicator-separator {
    background-color: ${p => p.theme.colors.light};
  }

  .select__loading-indicator span {
    background-color: ${p => p.theme.colors.light};
  }

  .select__menu {
    ${borderRadius};
    ${color};
  }

  .select__option {
    &--is-focused {
      background-color: ${p => p.theme.colors.g300};
    }
    &--is-selected {
      background-color: ${p => p.theme.colors.grayDark};
      color: ${p => p.theme.colors.white};
    }
  }
`;

export const Helper = styled.span`
  display: block;
  margin-top: 0.25em;

  ${fontSize};

  ${p =>
    p.isValid &&
    css`
      color: ${p.theme.colors.danger};
    `};
`;
