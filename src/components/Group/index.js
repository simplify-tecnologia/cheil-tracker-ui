import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme } from 'cheil-tracker-ui/hocs';
import { compact, filter, isBoolean } from 'lodash';
import { removeSpaceProps } from 'cheil-tracker-ui/utils';
import { VGroup, HGroup } from './styles';

/**
 * Group is used to group other elements. <br/>
 * **__Info__**: A group passes all props like `color`, `size`, `etc...` to it's children.
 */
class Group extends React.Component {
  static displayName = 'Group';

  static defaultProps = {
    vertical: false,
    noBorders: false,
    borderRadius: 2,
  };

  static propTypes = {
    /** A group can display it's children **vertical**. */
    vertical: PropTypes.bool,
  };

  render() {
    const { className } = this.props;
    const cn = cx('group', className);
    const { vertical, children, fluid, ...rest } = this.props;
    const StyledGroup = vertical ? VGroup : HGroup;
    const filterChildren = filter(compact(children), e => !isBoolean(e));

    const items = React.Children.map(filterChildren, (c, index) => {
      const itemClassName = cx(
        { child: index !== 0 && index !== filterChildren.length - 1 },
        { first: index === 0 },
        { last: index === filterChildren.length - 1 }
      );

      const itemProps = { ...removeSpaceProps(rest) };
      if (filterChildren.length > 1) {
        itemProps.className = itemClassName;
      }

      return React.cloneElement(c, itemProps);
    });

    return (
      <StyledGroup {...rest} fluid={fluid} className={cn}>
        {items}
      </StyledGroup>
    );
  }
}

export default compose(withFallbackTheme(main))(Group);
