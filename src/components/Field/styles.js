import styled from 'styled-components';
import { color, fontFamily, alignItems } from 'styled-system';

export const StyledField = styled.div`
  display: flex;
  flex-direction: column;

  & > label {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 0.25em !important;

    ${color};
  }

  & > label span {
    color: ${p => p.theme.colors.danger};
  }

  & > div {
    position: relative;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  ${fontFamily};
  ${alignItems};
`;
