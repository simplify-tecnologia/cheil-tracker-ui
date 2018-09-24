import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';

import { StyledCard } from './styles';

class Card extends React.Component {
  static displayName = 'Card';

  static defaultProps = {
    bg: 'white',
    p: '0.5em',
    boxShadow: 'normal',
    border: 0,
    borderColor: 'gray',
    borderRadius: 4,
    textAlign: 'left',
    flexDirection: 'column',
  };

  static propTypes = {
    bg: PropTypes.string,
    p: PropTypes.string,
    boxShadow: PropTypes.string,
    border: PropTypes.number,
    borderColor: PropTypes.string,
    borderRadius: PropTypes.number,
    textAlign: PropTypes.string,
    flexDirection: PropTypes.string,
  };

  render() {
    const { children, className, ...rest } = this.props;
    const cn = cx(`card`, className);

    return (
      <StyledCard {...rest} className={cn}>
        {children}
      </StyledCard>
    );
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('card')
)(Card);
