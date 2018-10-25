import React from 'react';
import cx from 'classnames';
import { main } from 'cheil-tracker-ui/themes';
import { compose } from 'recompose';
import { withFallbackTheme } from 'cheil-tracker-ui/hocs';

import { StyledAvatarGroup } from './styles';

class AvatarGroup extends React.Component {
  static displayName = 'AvatarGroup';

  render() {
    const { children, className, ...rest } = this.props;
    const cn = cx(`avatar-group`, className);

    return (
      <StyledAvatarGroup {...rest} className={cn}>
        {children}
      </StyledAvatarGroup>
    );
  }
}

export default compose(withFallbackTheme(main))(AvatarGroup);
