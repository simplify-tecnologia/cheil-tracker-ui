import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme, withVariant } from 'cheil-tracker-ui/hocs';
import { StyledTitle } from './styles';

class Title extends React.Component {
  static displayName = 'Title';

  static defaultProps = {
    as: 'h3',
    color: null,
    fontFamily: 'primary',
    fontSize: 'large',
    textAlign: 'left',
    thin: false,
    strong: false,
  };

  static propTypes = {
    /** Render title as `h2`, `h3`, `h4` */
    as: PropTypes.string,
    /**
     * A title an have different colors. <br/>
     * **Enum**: `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
     */
    color: PropTypes.string,
    /** A title can have its font as thin */
    thin: PropTypes.bool,
    /** A title can have its font as strong */
    strong: PropTypes.bool,
    /** A title can be aligned. */
    textAlign: PropTypes.string,
  };

  render() {
    let { as, children, className, ...props } = this.props;
    const cn = cx(`title`, className);
    const Component = StyledTitle.withComponent(as);

    if (props.subtitle) {
      props = { ...props, ...{ thin: true, fontSize: 'normal' } };
    }

    return (
      <Component {...props} className={cn}>
        {children}
      </Component>
    );
  }
}

export default compose(
  withFallbackTheme(main),
  withVariant('title')
)(Title);
