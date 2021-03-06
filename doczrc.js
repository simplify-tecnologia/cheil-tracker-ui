import doczPluginNetlify from 'docz-plugin-netlify'; // eslint-disable-line import/no-extraneous-dependencies

import { main as theme } from './src/themes';

export default {
  title: 'Cheil Tracker UI',
  src: './docs/',
  plugins: [doczPluginNetlify()],
  indexHtml: 'docs/index.html',
  themeConfig: {
    colors: {
      white: theme.colors.white,
      grayExtraLight: theme.grays.g100,
      grayLight: theme.grays.g300,
      gray: theme.grays.g500,
      grayDark: theme.grays.g700,
      grayExtraDark: theme.grays.g900,
      dark: theme.grays.g900,
      blue: theme.colors.blue,
      skyBlue: theme.colors.blue,
      primary: theme.themeColors.primary,
      text: theme.themeColors.dark,
      link: theme.colors.blue,
      footerText: theme.grays.g700,
      sidebarBg: theme.grays.g100,
      sidebarText: theme.grays.g900,
      background: theme.colors.white,
      border: theme.grays.g300,
      theadColor: theme.grays.g500,
      theadBg: theme.grays.g300,
      tableColor: theme.grays.g700,
      tooltipBg: theme.grays.g900,
      tooltipColor: theme.grays.g100,
      codeBg: theme.grays.g100,
      codeColor: theme.grays.g700,
      preBg: theme.grays.g100,
    },
  },
};
