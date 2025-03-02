import '@emotion/react';
import {
  colors,
  spacing,
  typography,
  borders,
  shadows,
  transitions,
  zIndex,
} from './theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors;
    spacing: typeof spacing;
    typography: typeof typography;
    borders: typeof borders;
    shadows: typeof shadows;
    transitions: typeof transitions;
    zIndex: typeof zIndex;
  }
}
