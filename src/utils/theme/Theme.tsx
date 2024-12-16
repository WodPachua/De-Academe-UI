import _ from 'lodash';
import { createTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import components from './Components';
import typography from './Typography';
import { shadows } from './Shadows';
import { LightThemeColors } from './LightThemeColors';
import { baselightTheme } from './DefaultColors';
import * as locales from '@mui/material/locale';

export const BuildTheme = (config: any = {}) => {
  const themeOptions = LightThemeColors.find((theme) => theme.name === config.theme);
  const defaultTheme = baselightTheme;
  const defaultShadow = shadows;
  const themeSelect = themeOptions;
  const baseMode = {
    palette: {
      mode: 'light',
    },
    shape: {
      borderRadius: '7px',
    },
    shadows: defaultShadow,
    typography: typography,
  };
  const theme = createTheme(
    _.merge({}, baseMode, defaultTheme, locales, themeSelect, {
      direction: config.direction,
    }),
  );
  theme.components = components(theme);

  return theme;
};

const ThemeSettings = () => {
  const activDir = 'ltr';
  const activeTheme = 'light';
  const theme = BuildTheme({
    direction: activDir,
    theme: activeTheme,
  });

  return theme;
};


export { ThemeSettings };
