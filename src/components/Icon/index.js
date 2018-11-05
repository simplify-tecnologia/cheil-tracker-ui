import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';
import { StyledIcon } from './styles';

/**
 * Icon component uses **FontAwesome** icons.
 * ```html
 * <link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
 * ```
 *
 * For a list of all icons check **FontAwesome** [webiste](https://fontawesome.com/v4.7.0/icons/).
 */
class Icon extends React.Component {
  static displayName = 'Icon';

  static defaultProps = {
    color: null,
    bg: null,
    fontSize: null,
    size: '1.6em',
    inverted: false,
    circular: false,
    type: 'regular',
  };

  static propTypes = {
    /** FontAwesome icon name */
    name: PropTypes.string.isRequired,
    /**
     * A icon can have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     * */
    color: PropTypes.string,
    /**
     * A icon can have different background color. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     * */
    bg: PropTypes.string,
    /** A icon can have it's color inverted. */
    inverted: PropTypes.bool,
    /** Icon can formatted to appear circular. */
    circular: PropTypes.bool,
    /** An icon can have shadow. */
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
  };

  render() {
    const { name, type, className, ...rest } = this.props;
    const t = type.slice(0, 1);
    const cn = cx(`icon`, `fa${t} fa-${name}`, className);
    return <StyledIcon {...rest} className={cn} />;
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('icon')
)(Icon);
