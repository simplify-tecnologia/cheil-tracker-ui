import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';

import { StyledText } from './styles';

class Text extends React.Component {
  static displayName = 'Text';

  static defaultProps = {
    as: 'p',
    color: null,
    fontFamily: 'primary',
    textAlign: 'left',
    strong: false,
    thin: false,
  };

  static propTypes = {
    /**
     * A text can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     */
    color: PropTypes.string,
    /** A text can have its font as thin */
    thin: PropTypes.bool,
    /** A text can have its font as strong */
    strong: PropTypes.bool,
    /** A text can be aligned. */
    textAlign: PropTypes.string,
  };

  render() {
    const { as, children, className, ...rest } = this.props;
    const cn = cx(`text`, className);
    const Component = StyledText.withComponent(as);
    return (
      <Component {...rest} className={cn}>
        {children}
      </Component>
    );
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('text')
)(Text);
