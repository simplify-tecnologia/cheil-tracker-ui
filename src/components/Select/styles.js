import styled, { css } from 'styled-components';
import { fluid } from 'cheil-tracker-ui/utils';
import { fontFamily, fontSize, color, space, width, borderRadius } from 'styled-system';

import Select from 'react-select';

export const StyledSelect = styled(Select)`
  ${fontFamily};
  ${fontSize};
  ${space};
  ${fluid};
  ${width};

  .select__control {
    border: 0;
    min-height: ${props => props.height}px;

    ${borderRadius};
    ${color};

    ${props =>
      props.shadow
        ? css`
            box-shadow: ${props.theme.shadows.normal};
          `
        : css`
            box-shadow: none;
            border: 1px solid ${props.theme.shadows.light};
          `};

    .select__value-container {
      padding: 1px 8px;
    }
  }

  .select__indicator {
    padding: 6px;
  }

  .select__indicator-separator {
    background-color: ${props => props.theme.colors.light};
  }

  .select__loading-indicator span {
    background-color: ${props => props.theme.colors.light};
  }

  .select__menu {
    ${borderRadius};
    ${color};
  }

  .select__option {
    &--is-focused {
      background-color: ${props => props.theme.colors.g300};
    }
    &--is-selected {
      background-color: ${props => props.theme.colors.grayDark};
      color: ${props => props.theme.colors.white};
    }
  }
`;
