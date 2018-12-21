import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';

import * as s from './styles';

class Select extends React.Component {
  static displayName = 'Select';

  static defaultProps = {
    bg: 'white',
    color: 'gray',
    fontFamily: 'primary',
    fontSize: 'tiny',
    borderRadius: 2,
    borderColor: 'light',
    width: '100%',
    shadow: true,
    height: 32,
    variant: null,
    helperText: '',
    isValid: false,
  };

  static propTypes = {
    bg: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { className, helperText, ...rest } = this.props;
    const cn = cx(`select`, className);

    return (
      <s.SelectContainer {...rest} className={cn}>
        <s.StyledSelect {...rest} classNamePrefix="select" />
        {helperText && <s.Helper {...rest}>{helperText}</s.Helper>}
      </s.SelectContainer>
    );
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('select')
)(Select);
