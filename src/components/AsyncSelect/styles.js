import styled from 'styled-components';
import { fontFamily, fontSize, color, space, width, borderRadius } from 'styled-system';

import AsyncSelect from 'react-select/lib/Async';

export const StyledSelect = styled(AsyncSelect)`
  ${fontFamily};
  ${fontSize};
  ${space};
  ${width};

  .select__control {
    border: 0;
    box-shadow: ${props => props.theme.shadows.normal};
    min-height: 32px;

    ${borderRadius};
    ${color};

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
