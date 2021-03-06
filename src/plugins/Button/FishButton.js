import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  common: {
    display: 'inline-block',
    transform: 'scale3d(1,1,1)',
    '-ms-transform': 'scale3d(1,1,1)' /* IE 9 */,
    '-moz-transform': 'scale3d(1,1,1)' /* Firefox */,
    '-webkit-transform': 'scale3d(1,1,1)' /* Safari 和 Chrome */,
    '-o-transform': 'scale3d(1,1,1)',
    transition: 'all 86ms ease-out',
  },
  sm: {
    '&:hover': {
      transform: 'scale3d(1.2, 1.2, 1.2)',
      '-ms-transform': 'scale3d(1.2, 1.2, 1.2)' /* IE 9 */,
      '-moz-transform': 'scale3d(1.2, 1.2, 1.2)' /* Firefox */,
      '-webkit-transform': 'scale3d(1.2, 1.2, 1.2)' /* Safari 和 Chrome */,
      '-o-transform': 'scale3d(1.2, 1.2, 1.2)',
    },
  },
  md: {
    '&:hover': {
      transform: 'scale3d(1.5, 1.5, 1.5)',
      '-ms-transform': 'scale3d(1.5, 1.5, 1.5)',
      '-moz-transform': 'scale3d(1.5, 1.5, 1.5)',
      '-webkit-transform': 'scale3d(1.5, 1.5, 1.5)',
      '-o-transform': 'scale3d(1.5, 1.5, 1.5)',
    },
  },
  lg: {
    '&:hover': {
      transform: 'scale3d(2.0, 2.0, 2.0)',
      '-ms-transform': 'scale3d(2.0, 2.0, 2.0)',
      '-moz-transform': 'scale3d(2.0, 2.0, 2.0)',
      '-webkit-transform': 'scale3d(2.0, 2.0, 2.0)',
      '-o-transform': 'scale3d(2.0, 2.0, 2.0)',
    },
  },
});

class FishButton extends Component {
  render() {
    const { className: classNamePro, children, size, classes } = this.props;
    const className = classNames(
      {
        [classes.common]: true,
        [classes.sm]: size === 'sm',
        [classes.md]: size === 'md',
        [classes.lg]: size === 'lg',
      },
      classNamePro,
    );
    return <div className={className}>{children}</div>;
  }
}
FishButton.propTypes = {
  /**
   * scale multiple,
   * sm :1.2,
   * md:1.5,
   * lg:2.0
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};
FishButton.defaultProps = {
  size: 'sm',
};
export default withStyles(styles, { name: 'RMFishButton' })(FishButton);
