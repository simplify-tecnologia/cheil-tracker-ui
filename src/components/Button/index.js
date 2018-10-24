import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import lodash from 'lodash';
import { Icon, Loader } from 'cheil-tracker-ui/components';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';

import { StyledButton } from './styles';

class Button extends React.Component {
  static displayName = 'Button';

  static defaultProps = {
    color: 'gray',
    bg: null,
    p: '0 1em',
    m: 0,
    border: 1,
    borderColor: 'gray',
    borderRadius: 2,
    boxShadow: null,
    fontFamily: 'primary',
    fontWeight: 400,
    fontSize: 'small',
    height: '2.285em',
    variant: null,
    loading: false,
    disabled: false,
    outlined: false,
    fluid: false,
    icon: null,
    iconPosition: 'left',
    static: false,
    href: null,
  };

  static propTypes = {
    outlined: PropTypes.bool,
    /** A button can show a loading indicator. */
    loading: PropTypes.bool,
    /** A button can take the width of its container. */
    fluid: PropTypes.bool,
    /** Use static to disable hover */
    static: PropTypes.bool,
    /** A button can be disabled. */
    disabled: PropTypes.bool,
    /** A button can have an icon */
    icon: PropTypes.string,
    /** A button can show icon left or right */
    iconPosition: PropTypes.string,
    /** A button can be render as A tag */
    href: PropTypes.string,
  };

  renderLoading() {
    const { loading } = this.props;
    if (!loading) return null;

    const { size, color } = this.props;
    return (
      <div className="loader-container">
        <Loader size={size} color={color || 'black'} />
      </div>
    );
  }

  render() {
    const { icon, iconPosition, iconType, children, ...rest } = this.props;
    const EnhancedButton = rest.href ? StyledButton.withComponent('a') : StyledButton;
    const className = cx(
      'button',
      { 'icon-only': children === null || children === undefined },
      { 'icon-reverse': iconPosition === 'right' },
      rest.className
    );

    let btnChildren = [icon && <Icon key={0} name={icon} type={iconType} />, children];

    if (iconPosition === 'right') {
      btnChildren = lodash.reverse(btnChildren);
    }

    return (
      <EnhancedButton {...rest} className={className}>
        {btnChildren}
        {this.renderLoading()}
      </EnhancedButton>
    );
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('button')
)(Button);
