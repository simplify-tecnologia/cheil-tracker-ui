import styled from 'styled-components';
import { fontFamily, fontSize, color, space, borderRadius } from 'styled-system';

import Select from 'react-select';

export const StyledSelect = styled(Select)`
  ${fontFamily};
  ${fontSize};
  ${color};
  ${space};

  .select__control {
    border: 0;
    box-shadow: ${props => props.theme.shadows.normal};

    ${borderRadius};
  }

  .select__indicator {
    &-separator {
      background-color: ${props => props.theme.colors.light};
    }
  }

  .select__loading-indicator span {
    background-color: ${props => props.theme.colors.light};
  }

  .select__menu {
    ${borderRadius};
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
