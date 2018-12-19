import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme } from 'cheil-tracker-ui/hocs';
import { StyledField } from './styles';

/**
 * A **Field** is used to build a form.
 */
class Field extends React.Component {
  static displayName = 'Field';

  static defaultProps = {
    color: 'dark',
    fontFamily: 'primary',
    alignItems: 'normal',
    label: null,
    required: false,
  };

  static propTypes = {
    /** Align field children */
    alignItems: PropTypes.string,
    /** A field can have a label */
    label: PropTypes.string,
    /** It true it will show a red asterix */
    required: PropTypes.bool,
  };

  render() {
    const { className } = this.props;
    const cn = cx(`field`, className);
    const { label, required, children, ...rest } = this.props;

    return (
      <StyledField {...rest} className={cn}>
        {label && (
          <label>
            {label} {required && <span>*</span>}
          </label>
        )}
        <div>{children}</div>
      </StyledField>
    );
  }
}

export default compose(withFallbackTheme(main))(Field);
