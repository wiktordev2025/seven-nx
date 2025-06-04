export const tokens = {
  colors: {
    primary: '#007AC2',
    primaryDark: '#051650',
    textLight: '#fff',
    shadow: 'rgba(63, 81, 181, 0.4)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  typography: {
    fontSize: {
      sm: '14px',
      md: '16px',
      lg: '18px'
    }
  },
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px'
  }
} as const;

export type Tokens = typeof tokens;
