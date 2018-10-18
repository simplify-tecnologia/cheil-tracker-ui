import { rgba } from 'polished';

const theme = { name: 'main' };

/**
 * Color system
 */

const grays = {
  g100: '#f6f6f6',
  g300: '#eee',
  g500: '#ccc',
  g700: '#999',
  g900: '#666',
};

theme.grays = grays;

const white = '#fff';
const black = '#000';
const gray = grays.g700;
const grayDark = '#363636';

const pink = '#ff7ec5';
const purple = '#9f5fcf';
const blue = '#55b4ed';
const turquoise = '#32dbb1';
const green = '#9bdb4f';
const yellow = '#ffc214';
const red = '#f26d35';

const primary = grayDark;
const secondary = white;
const success = green;
const info = blue;
const warning = yellow;
const danger = red;
const light = grays.g500;
const dark = grayDark;

const themeColors = {
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  light,
  dark,
};

theme.themeColors = themeColors;

theme.colors = {
  ...theme.themeColors,
  ...grays,
  pink,
  purple,
  blue,
  turquoise,
  green,
  yellow,
  red,
  white,
  black,
  gray,
  grayDark,
};

/**
 * Fonts
 */

theme.fonts = {
  primary: '"Open Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace: 'monospace',
};

/** All sizes are in pixels */
theme.radii = [0, 2, 4];

theme.space = [0, 4, 8, 16, 24, 32, 40, 48, 64, 128, 256, 512];

theme.fontSizes = {
  tiny: 13,
  small: 14,
  normal: 16,
  medium: 18,
  large: 24,
  xLarge: 30,
  huge: 36,
};

/**
 * Components
 */

theme.borderRadius = 4;

theme.shadows = {
  normal: `0 0 5px 0 ${rgba(black, 0.4)}`,
  large: `0 0 15px 0 ${rgba(black, 0.15)}, 0 4px 20px 0 ${rgba(black, 0.25)}`,
};

theme.components = {};
theme.components.card = {
  pink: {
    borderLeft: '5px solid',
    borderLeftColor: 'pink',
  },
  purple: {
    borderLeft: '5px solid',
    borderLeftColor: 'purple',
  },
  blue: {
    borderLeft: '5px solid',
    borderLeftColor: 'blue',
  },
  turquoise: {
    borderLeft: '5px solid',
    borderLeftColor: 'turquoise',
  },
  green: {
    borderLeft: '5px solid',
    borderLeftColor: 'green',
  },
  yellow: {
    borderLeft: '5px solid',
    borderLeftColor: 'yellow',
  },
  red: {
    borderLeft: '5px solid',
    borderLeftColor: 'red',
  },
};

theme.components.button = {
  primary: {
    color: 'white',
    borderColor: 'primary',
    bg: 'primary',
  },
  secondary: {
    color: 'gray',
    borderColor: 'secondary',
    bg: 'secondary',
    boxShadow: 'normal',
  },
  success: {
    color: 'white',
    borderColor: 'success',
    bg: 'success',
  },
  danger: {
    color: 'white',
    borderColor: 'danger',
    bg: 'danger',
  },
  blue: {
    color: 'white',
    borderColor: 'blue',
    bg: 'blue',
  },
  turquoise: {
    color: 'white',
    borderColor: 'turquoise',
    bg: 'turquoise',
  },
};

theme.components.icon = {};

export default theme;
