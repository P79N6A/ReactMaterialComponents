import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = {
  root: {
    display: 'inline-block',
    '@global svg': {
      verticalAlign: 'middle',
      width: '0.6em',
    },
  },
  icon: {
    padding: '0 3px',
  },
};

class BreadcrumbItem extends React.Component {
  render() {
    console.log(this.props);
    const { path, icon, name, notLink, classes, color = 'inherit', children } = this.props;

    let item = children;

    if (!children) {
      if (!notLink) {
        item = (
          <a href={path}>
            {!!icon ? <i className={classes.icon}>{icon}</i> : null}
            <font>{name}</font>
          </a>
        );
      } else {
        item = (
          <span>
            <i className={classes.icon}>{icon}</i>
            <font>{name}</font>
          </span>
        );
      }
    }

    return (
      <div className={classes.root} key={path}>
        {item}
      </div>
    );
  }
}

BreadcrumbItem.propTypes = {
  /**
   * The routing path name
   */
  path: PropTypes.string,
  /**
   * The routing icon
   */
  icon: PropTypes.element,
  /**
   * The routing name
   */
  name: PropTypes.string,
  /**
   * Whether the routing is a link or not
   */
  notLink: PropTypes.bool,
};

BreadcrumbItem.defaultProps = {};

export default withStyles(styles, { name: 'RMBreadcrumbItem' })(BreadcrumbItem);
