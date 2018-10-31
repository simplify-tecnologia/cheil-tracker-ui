import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme } from 'cheil-tracker-ui/hocs';

import { StyledSelect } from './styles';

class Select extends React.Component {
  static displayName = 'Select';

  static defaultProps = {
    bg: 'white',
    color: 'gray',
    fontFamily: 'primary',
    fontSize: 'tiny',
    borderRadius: 2,
  };

  static propTypes = {
    bg: PropTypes.string,
    color: PropTypes.string,
  };

  render() {
    const { className, ...rest } = this.props;
    const cn = cx(`select`, className);

    return <StyledSelect {...rest} className={cn} classNamePrefix="select" />;
  }
}

export default compose(withFallbackTheme(main))(Select);
