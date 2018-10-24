import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme } from 'cheil-tracker-ui/hocs';
import { StyledAvatar } from './styles';

class Avatar extends React.Component {
  static displayName = 'Avatar';

  static defaultProps = {
    bg: 'gray',
    color: 'white',
    fontFamily: 'primary',
    fontSize: 'small',
    name: 'John Doe',
    size: 36,
  };

  static propTypes = {
    bg: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
  };

  render() {
    const { className, name, ...rest } = this.props;
    const cn = cx(`avatar`, className);

    let initials = name.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return (
      <StyledAvatar {...rest} className={cn}>
        {initials}
      </StyledAvatar>
    );
  }
}

export default compose(withFallbackTheme(main))(Avatar);
