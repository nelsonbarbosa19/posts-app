// Theme configuration
// Contains shared colors, spacing, typography, etc.

export const colors = {
  // Primary palette
  primary: {
    main: '#3182ce', // Blue
    light: '#4299e1',
    dark: '#2c5282',
    contrastText: '#ffffff',
  },

  // Secondary palette
  secondary: {
    main: '#38a169', // Green
    light: '#48bb78',
    dark: '#2f855a',
    contrastText: '#ffffff',
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },

  // Semantic colors
  semantic: {
    error: '#e53e3e',
    warning: '#dd6b20',
    success: '#38a169',
    info: '#3182ce',
  },

  // Background colors
  background: {
    default: '#ffffff',
    paper: '#f9f9f9',
    subtle: '#f3f4f6',
  },

  // Text colors
  text: {
    primary: '#1f2937',
    secondary: '#4b5563',
    disabled: '#9ca3af',
    hint: '#6b7280',
  },
};

export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem', // 8px
  md: '1rem', // 16px
  lg: '1.5rem', // 24px
  xl: '2rem', // 32px
  xxl: '3rem', // 48px
  xxxl: '4rem', // 64px
};

export const typography = {
  fontFamily: {
    primary:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    code: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    xxl: '1.5rem', // 24px
    xxxl: '2rem', // 32px
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};

export const borders = {
  radius: {
    sm: '0.125rem', // 2px
    md: '0.25rem', // 4px
    lg: '0.5rem', // 8px
    xl: '1rem', // 16px
    full: '9999px', // Fully rounded (for circles)
  },
  width: {
    thin: '1px',
    medium: '2px',
    thick: '4px',
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const transitions = {
  duration: {
    fast: '150ms',
    normal: '300ms',
    slow: '500ms',
  },
  timing: {
    ease: 'ease',
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

export const zIndex = {
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
};

// Combine all theme elements
const theme = {
  colors,
  spacing,
  typography,
  borders,
  shadows,
  transitions,
  zIndex,
};

export default theme;
