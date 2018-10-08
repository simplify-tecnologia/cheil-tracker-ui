import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';

import { StyledBadge } from './styles';

class Badge extends React.Component {
  static displayName = 'Badge';

  static defaultProps = {
    color: 'white',
    bg: 'info',
    fontFamily: 'primary',
  };

  static propTypes = {
    /**
     * A icon can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     */
    color: PropTypes.string,
    /**
     * A icon can have different background color. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     */
    bg: PropTypes.string,
    fontFamily: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;
    const cn = cx(`badge`, className);

    return (
      <StyledBadge {...rest} className={cn}>
        {children}
      </StyledBadge>
    );
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('badge')
)(Badge);
