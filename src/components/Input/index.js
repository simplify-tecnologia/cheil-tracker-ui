import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';
import { Icon } from 'cheil-tracker-ui/components';
import { isString } from 'lodash';

import * as s from './styles';

/**
 * **Input** is a field used to get a response from a user.
 */
class Input extends React.Component {
  static displayName = 'Input';

  static defaultProps = {
    color: 'grayDark',
    bg: 'white',
    p: null,
    m: 0,
    border: 1,
    borderColor: 'light',
    borderRadius: 2,
    boxShadow: null,
    fontSize: 'small',
    fontWeight: 400,
    placeholderColor: 'g900',
    height: '2.857em',
    variant: null,
    fluid: false,
    type: 'text',
    placeholder: '',
    icon: null,
    iconType: 'regular',
    onEnter: null,
    onChange: null,
  };

  static propTypes = {
    /** `onChange(event: SyntheticEvent, data: object)` */
    onChange: PropTypes.func,
    /** `onEnter(event: SyntheticEvent, data: object)` */
    onEnter: PropTypes.func,
    /**
     * Input type. <br/>
     * **Enum**: `text`, `email`, `password`, `etc..`
     */
    type: PropTypes.string,
    /** A input can have a placeholder. */
    placeholder: PropTypes.string,
    /** A input can have an icon */
    icon: PropTypes.string,
  };

  handleKeyDown = evt => {
    const { onKeyDown, onEnter } = this.props;

    if (evt.keyCode === 13 && onEnter) {
      onEnter(evt, evt.target.value);
    }

    if (onKeyDown) {
      onKeyDown(evt, evt.target.value);
    }
  };

  handleChange = evt => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(evt, evt.target.value);
    }
  };

  render() {
    const { className, ...props } = this.props;
    const cn = cx(`input`, className);
    let InputIcon = null;

    if (props.icon) {
      if (isString(props.icon)) {
        InputIcon = (
          <Icon
            name={props.icon}
            type={props.iconType}
            color={props.color}
            fontSize={props.fontSize}
          />
        );
      } else {
        InputIcon = props.icon;
      }
    }
    return (
      <s.InputContainer {...props} height={props.height} fluid={props.fluid} className={cn}>
        {InputIcon}
        <s.Input
          {...props}
          hasIcon={props.icon !== null}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </s.InputContainer>
    );
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('input')
)(Input);
