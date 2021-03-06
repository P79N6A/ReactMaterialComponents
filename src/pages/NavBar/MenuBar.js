import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NavBar from 'plugins/NavBar';
import data from './data';

const styles = theme => ({
  root: {
    width: 400,
    background: '#fff',
  },
});

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          list={data}
          itemKeysMap={{
            name: 'component',
            children: 'childRoutes',
            key: 'path',
          }}
          onClick={this.onClick}
          mode="horizontal"
          selectable={false}
        />
      </div>
    );
  }
}

MenuBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuBar);
