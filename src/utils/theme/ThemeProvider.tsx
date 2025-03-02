import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme from './themeConstants';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};
