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

theme.colors = {
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

const primary = grayDark;
const secondary = white;
const success = green;
const info = blue;
const warning = yellow;
const danger = red;
const light = grays.g500;
const dark = grayDark;

theme.themeColors = {
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  light,
  dark,
};

/**
 * Fonts
 */

theme.fonts = {
  primary: '"Open Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  monospace: 'monospace',
};

/** All sizes are in pixels */
theme.sizes = {
  fontSize: {
    tiny: 13,
    small: 14,
    normal: 16,
    medium: 18,
    large: 24,
    xLarge: 30,
    huge: 36,
  },
};

/**
 * Components
 */

theme.borderRadius = 4;

theme.boxShadow = {
  normal: `0 0 5px 0 ${rgba(black, 0.4)}`,
  large: `0 0 15px 0 ${rgba(black, 0.15)}, 0 4px 20px 0 ${rgba(black, 0.25)}`,
};

export default theme;
