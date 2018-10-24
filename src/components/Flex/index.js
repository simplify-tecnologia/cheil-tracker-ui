import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme } from 'cheil-tracker-ui/hocs';
import { StyledFlex } from './styles';

class Flex extends React.Component {
  static displayName = 'Flex';

  static defaultProps = {
    p: null,
    m: null,
  };

  static propTypes = {
    p: PropTypes.string,
    m: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;
    const cn = cx(`flex`, className);

    return (
      <StyledFlex {...rest} className={cn}>
        {children}
      </StyledFlex>
    );
  }
}

export default compose(withFallbackTheme(main))(Flex);
