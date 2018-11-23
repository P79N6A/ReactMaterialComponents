import React, { Component } from 'react';
import {withStyles} from "@material-ui/core/styles";
import Chip from '@material-ui/core/Chip';
import PropTypes from 'prop-types';

import { emphasize, fade, darken } from '../styles/colorManipulator';

let styles = theme => ({
  color: {
    primaryLight: {
      background: theme.palette.primary.light,
      border: '0',
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.primary.light, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.primary.light, 0.12),
      },
    },
    primaryMain: {
      background: theme.palette.primary.main,
      border: '0',
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.primary.main, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.primary.main, 0.12),
      },
    },
    primaryDark: {
      background: theme.palette.primary.dark,
      border: '0',
      color: theme.palette.primary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.primary.dark, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.primary.dark, 0.12),
      },
    },
    secondaryLight: {
      background: theme.palette.secondary.light,
      border: '0',
      color: theme.palette.secondary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.secondary.light, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.secondary.light, 0.12),
      },
    },
    secondaryMain: {
      background: theme.palette.secondary.main,
      border: '0',
      color: theme.palette.secondary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.secondary.main, 0.12),
      },
    },
    secondaryDark: {
      background: theme.palette.secondary.dark,
      border: '0',
      color: theme.palette.secondary.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.secondary.dark, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.secondary.dark, 0.12),
      },
    },
    errorLight: {
      background: theme.palette.error.light,
      border: '0',
      color: theme.palette.error.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.error.light, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.error.light, 0.12),
      },
    },
    errorMain: {
      background: theme.palette.error.main,
      border: '0',
      color: theme.palette.error.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.error.main, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.error.main, 0.12),
      },
    },
    errorDark: {
      background: theme.palette.error.dark,
      border: '0',
      color: theme.palette.error.contrastText,
      '&:hover, &:focus': {
        backgroundColor: emphasize(theme.palette.error.dark, 0.08),
      },
      '&:active': {
        backgroundColor: emphasize(theme.palette.error.dark, 0.12),
      },
    },
  },
  size: {
    small: {
      minHeight: '28px',
      fontSize: '0.8125rem',
    },
    medium: {
      minHeight: '32px',
      fontSize: '0.875rem',
    },
    large: {
      minHeight: '36px',
      fontSize: '0.9375rem',
    },
  },
  mixin: {},
});

for (let color in styles.color) {
  for (let size in styles.size) {
    let _key = color + size;
    styles.mixin[_key] = { ...styles.color[color], ...styles.size[size] };
  }
}

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
      onClose: props.onClose,
      color: props.color,
      size: props.size,
      closable: props.closable,
    };
  }

  componentDidMount() {}

  handleDelete = e => {
    this.setState({ close: true });
    this.props.onClose(e);
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
  };

  render() {
    const { label, classes, ...props } = this.props;

    props.color = this.state.color;
    props.size = this.state.size;
    props.closable = this.state.closable;

    const { close } = this.state;

    const { color, size, closable } = props;

    const ChipShow = closable ? (
      <Chip
        classes={{ root: classes[color + size] }}
        onDelete={this.handleDelete.bind(this)}
        label={label}
      />
    ) : (
      <Chip classes={{ root: classes[color + size] }} label={label} />
    );
    return !close ? ChipShow : null;
  }
}
Tag.propTypes = {
  /**
   * the content of Tag
   */
  label: PropTypes.string,
  /**
   * if close the Tag, set true to show close icon button.default value is false.
   */
  closable: PropTypes.bool,
  /**
   * size of the Tag,support for three sizes:'small，medium, large',defalut value is medium.
   */
  size: PropTypes.string,
  /**
   * color of the Tag,support for:'primaryLight, primaryMain,primaryDark,secondaryLight,secondaryMain,secondaryDark,errorLight,errorMain,errorDark',defalut is primaryMain.
   */
  color: PropTypes.string,
  /**
   *  callback function when delete the Tag
   */
  onClose: PropTypes.func,
};

Tag.defaultProps = {
  size: 'medium',
  closable: false,
  color: 'primaryMain',
};

export default withStyles(styles, { name: 'RMTag', withTheme: true })(Tag);
